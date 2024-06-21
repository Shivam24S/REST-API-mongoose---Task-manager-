// CRUD operations

// creating

// const mongodb = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";

// const client = mongodb.MongoClient.connect(connectionURL);

// const database = "task-manager";

// async function addUser() {
//   const db = (await client).db(database);

//   const user = await db.collection("Users").insertOne(
//     {
//       name: "shivam shrivastav",
//       age: 22,
//     },
//     (err, result) => {
//       if (err) {
//         console.log("can't able to add user");
//       } else {
//         console.log(result.ops);
//       }
//     }
//   );
//   console.log(user);

//   insertMany

//   const users = await db.collection("Users").insertMany([
//     {
//       name: "shivay",
//       age: 20,
//     },
//     {
//       name: "shiva",
//       age: 23,
//     },
//   ]);

//   console.log(users);
// }

// addUser();

// reading from database

const mongodb = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";

const database = "task-manager";

const client = mongodb.MongoClient.connect(connectionURL);

async function readingData() {
  try {
    const db = (await client).db(database);

    // findOne
    // const userData = await db.collection("Users").findOne({ name: "shivay" });

    // find

    const userData = await db
      .collection("Users")
      .find({ age: 22 })
      .toArray((err, users) => {
        if (err) {
          return console.log("no match found");
        } else return users;
      });

    if (!userData) {
      return console.log("No user found");
    } else {
      console.log(userData);
    }
  } catch (error) {
    console.log(error);
  }
}

readingData();
