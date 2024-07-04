const mongoose = require("mongoose");

const PracticeTask = mongoose.model("practiceTask", {
  task: {
    type: String,
    required: true,
    minLength: 1,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = PracticeTask;
