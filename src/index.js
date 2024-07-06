const express = require("express");
require("../src/db/mongoose.js");

const PracticeTask = require("../src/model/Practice-task.js");

const userRouter = require("../src/routes/userRoute.js");
const taskRouter = require("../src/routes/taskRoute.js");

const app = express();
app.use(userRouter);
app.use(taskRouter);

// specifying port for local as well as remote
const port = 3000 || process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log("server running on port " + port);
});

app.post("/practiceTask", async (req, res) => {
  const practiceTaskData = new PracticeTask(req.body);

  try {
    await practiceTaskData.save();
    res.status(201).send("practice added successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});
