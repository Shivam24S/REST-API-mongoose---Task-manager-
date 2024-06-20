// CRUD operations

const mongodb = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";

const client = mongodb.MongoClient.connect(connectionURL);

const database = "task-manager";

async function addUser() {
  const db = (await client).db(database);

  const user = await db.collection("Users").insertOne({
    name: "shivam shrivastav",
    age: 22,
  });
  console.log(user);
}

addUser();
