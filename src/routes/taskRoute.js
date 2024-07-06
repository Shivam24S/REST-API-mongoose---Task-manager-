const express = require("express");

const router = express.Router();

const Task = require("../model/task.js");

router.post("/task", async (req, res) => {
  const taskData = new Task(req.body);

  try {
    await taskData.save();
    res.status(201).send("task added successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
}); // reading of end point using mongo queries

// challenge task getting tasks data

router.get("/task", async (req, res) => {
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

router.get("/task/:id", async (req, res) => {
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

module.exports = router;
