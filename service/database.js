const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('foodfetch');

const userCollection = db.collection('user');
const recipeCollection = db.collection('recipe');
const photoCollection = db.collection('photo');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log('Connected to MongoDB');
  } catch (ex) {
    console.error(`Unable to connect to database because ${ex.message}`);
    process.exit(1);
  }
})();

async function getUser(email) {
  return userCollection.findOne({ email: email });
}

async function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  return userCollection.insertOne(user);
}

async function updateUser(user) {
  return userCollection.updateOne(
    { email: user.email },
    { $set: user }
  );
}

// async function addRecipe(recipe) {
//   return recipeCollection.insertOne(recipe);
// }

async function getRecipes() {
  return recipeCollection.find({}).toArray();
}

async function addPhoto(photo) {
  return photoCollection.insertOne(photo);
}

async function getPhotos() {
  return photoCollection.find({}).toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
 // addRecipe,
  getRecipes,
  addPhoto,
  getPhotos,
};