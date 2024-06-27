// challenge

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const task = mongoose.model("Task-data", {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const taskData = new task({
//   description: "learning",
//   completed: true,
// });

// async function addingTask() {
//   try {
//     const taskInputs = taskData.save();

//     const result = await taskInputs;

//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// addingTask();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("Email is not valid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("age must be positive number only");
      }
    },
  },
});

const userDetails = new User({
  name: "shivam",
  email: "shivam@gmail.com",
  age: 22,
});

userDetails
  .save()
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
