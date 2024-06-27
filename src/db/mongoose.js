const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const userDetails = new User({
  name: "shivam",
  age: 22,
});

userDetails
  .save()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
