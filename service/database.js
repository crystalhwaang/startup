const { MongoClient } = require('mongodb');

let config;
try {
  config = require('./dbConfig.json');
} catch {
  console.error(
    'Missing service/dbConfig.json — copy service/dbConfig.example.json to service/dbConfig.json and add your MongoDB credentials.'
  );
  process.exit(1);
}

const url = `mongodb+srv://${config.userName}:${encodeURIComponent(config.password)}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('foodfetch');

const userCollection = db.collection('user');
const photoCollection = db.collection('photo');
const recipeCollection = db.collection('recipe');

async function connect() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log('Connected to MongoDB');
}

async function getUser(email) {
  return userCollection.findOne({ email });
}

async function getUserByToken(token) {
  return userCollection.findOne({ token });
}

async function addUser(user) {
  return userCollection.insertOne(user);
}

/** Persists login token or clears it on logout (must not $set entire doc — avoids _id issues). */
async function updateUser(user) {
  const updates = {};
  const set = {};
  if (user.password !== undefined) set.password = user.password;
  if (user.email !== undefined) set.email = user.email;
  if (user.token !== undefined) set.token = user.token;
  if (Object.keys(set).length > 0) {
    updates.$set = set;
  }
  if (user.token === undefined) {
    updates.$unset = { token: '' };
  }
  return userCollection.updateOne({ email: user.email }, updates);
}

async function getRecipes() {
  return recipeCollection.find({}).toArray();
}

async function addPhoto(photo) {
  return photoCollection.insertOne(photo);
}

async function getPhotos() {
  return photoCollection
    .find({})
    .sort({ createdAt: -1 })
    .limit(20)
    .toArray();
}

module.exports = {
  connect,
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  getRecipes,
  addPhoto,
  getPhotos,
};
