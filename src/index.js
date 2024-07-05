const express = require("express");
require("../src/db/mongoose.js");
const user = require("../src/model/users.js");

const Task = require("../src/model/task.js");

const PracticeTask = require("../src/model/Practice-task.js");
const app = express();

// specifying port for local as well as remote
const port = 3000 || process.env.PORT;

app.use(express.json());

// creation of end points

app.post("/users", async (req, res) => {
  const userData = new user(req.body);

  try {
    await userData.save();
    res.status(200).send("user created successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

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

// getting All data
app.get("/users", async (req, res) => {
  try {
    await user.find({});
    return res.status(200).send(users);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// getting individual user data

app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    await user.findById(_id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

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

// updating  user data

app.patch("/users/:id", async (req, res) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(404).send("can't able to update");
  }
});

// deleting user data

app.delete("/users/:id", async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    return res.status(200).send("user deleted successfully");
  } catch (error) {
    return res.status(404).send("can't able to delete");
  }
});
