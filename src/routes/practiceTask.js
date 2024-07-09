const express = require("express");

const router = express.Router();

const PracticeTask = require("../model/Practice-task.js");

router.post("/practiceTask", async (req, res) => {
  const practiceTaskData = new PracticeTask(req.body);

  try {
    await practiceTaskData.save();
    res.status(201).send("practice added successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
