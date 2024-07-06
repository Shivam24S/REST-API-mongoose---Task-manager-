const express = require("express");
require("../src/db/mongoose.js");
const user = require("../src/model/users.js");

const Task = require("../src/model/task.js");

const PracticeTask = require("../src/model/Practice-task.js");

const userRouter = require("../src/routes/userRoute.js");
const app = express();
app.use(userRouter);

// specifying port for local as well as remote
const port = 3000 || process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log("server running on port " + port);
});

app.post("/task", async (req, res) => {
  const taskData = new Task(req.body);

  try {
    await taskData.save();
    res.status(201).send("task added successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
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

// reading of end point using mongo queries

// challenge task getting tasks data

app.get("/task", async (req, res) => {
  try {
    const taskData = await Task.find({});

    if (!taskData) {
      return res.status(404).send("internal server err");
    }
    res.status(200).send(taskData);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// challenge task getting individual task data

app.get("/task/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);

    if (!task) {
      return res.status(404).send("internal server err");
    }
    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
