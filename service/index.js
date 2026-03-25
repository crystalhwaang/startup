const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const authCookieName = "token";
const app = express();
const DB = require('./database.js');

// Use port 4000 for the backend service (or a CLI override)
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());
app.use(cookieParser());

// Serve static files from the public directory when deployed
app.use(express.static('public'));

// let users = [];
// let photos = [];

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    user.token = uuid.v4();
    await DB.updateUser(user);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
    return;
  }

  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    await DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// GetPhotos
apiRouter.get('/photos', verifyAuth, async (_req, res) => {
  const photos = await DB.getPhotos();
  res.send(photos);
});

// SubmitPhotos
apiRouter.post('/photo', verifyAuth, async (req, res) => {
  const photo = {
    ...req.body,
    createdAt: new Date(),
  };

  await DB.addPhoto(photo);
  const photos = await DB.getPhotos();
  res.send(photos);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// updatePhotos considers a new photo in the feed
// function updatePhotos(newPhoto) {
//   photos.unshift(newPhoto);
//   if (photos.length > 20) {
//     photos.length = 20;
//   }
//   return photos;
// }

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return await DB.getUserByToken(value);
  }

  if (field === 'email') {
    return await DB.getUser(value);
  }

  return null;
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}