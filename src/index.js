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

app.post("/users", (req, res) => {
  const userData = new user(req.body);

  userData
    .save()
    .then(() => {
      res.status(200).send("user created successfully");
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

app.listen(port, () => {
  console.log("server running on port " + port);
});

app.post("/task", (req, res) => {
  const taskData = new Task(req.body);

  taskData
    .save()
    .then(() => {
      res.status(201).send("task added successfully");
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

app.post("/practiceTask", (req, res) => {
  const practiceTaskData = new PracticeTask(req.body);

  practiceTaskData
    .save()
    .then(() => {
      res.status(201).send("practice added successfully");
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

// reading of end point using mongo queries

// getting All data
app.get("/users", (req, res) => {
  user
    .find({})
    .then((users) => {
      return res.status(200).send(users);
    })
    .catch((err) => {
      return res.status(400).send(err.message);
    });
});

// getting individual user data

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;

  user
    .findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(400).send(err.message);
    });
});

// challenge task getting tasks data

app.get("/task", (req, res) => {
  async function gettingTaskData() {
    try {
      const taskData = await Task.find({});

      if (!taskData) {
        return res.status(404).send("internal server error");
      }
      res.status(200).send(taskData);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  gettingTaskData();
});

// challenge task getting individual task data

app.get("/task/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);

    if (!task) {
      return res.status(404).send("internal server error");
    }
    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
