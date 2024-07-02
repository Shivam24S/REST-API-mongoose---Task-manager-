const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// right now not needed

// const validator = require("validator");

// const UserData = new User({
//   name: "Shivam",
//   email: "shiva@gmail",
//   password: "shiv12",
//   age: 22,
// });

// async function addUserData() {
//   try {
//     const userDetails = await UserData.save();

//     console.log(userDetails);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// addUserData();
