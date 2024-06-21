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

// const mongodb = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";

// const database = "task-manager";

// const client = mongodb.MongoClient.connect(connectionURL);

// async function readingData() {
//   try {
//     const db = (await client).db(database);

//     // findOne it will return only first match
//     // const userData = await db.collection("Users").findOne({ name: "shivay" });

//     // find it will return an array from db who all match condition

//     const userData = await db
//       .collection("Users")
//       .find({ age: 22 })
//       .toArray((err, users) => {
//         if (err) {
//           return console.log("no match found");
//         } else return users;
//       });

//     if (!userData) {
//       return console.log("No user found");
//     } else {
//       console.log(userData);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// readingData();

// updating in database

const mongodb = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";

const client = mongodb.MongoClient.connect(connectionURL);

const database = "task-manager";

const ObjectId = mongodb.ObjectId;

async function updatingData() {
  try {
    const db = (await client).db(database);

    // db.collection("Users").updateOne(
    //   {
    //     _id: new ObjectId("667479f2b5f0c3f1952e3d9e"),
    //   },
    //   {
    //     $set: {
    //       name: "updated name",
    //     },
    //   }
    // );

    // updatingMany

    db.collection("Users").updateMany(
      { age: 22 },
      {
        $set: {
          age: 21,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

updatingData();
