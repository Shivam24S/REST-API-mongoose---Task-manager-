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
