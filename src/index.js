const express = require("express");
require("../src/db/mongoose.js");
const user = require("../src/model/users.js");

const Task = require("../src/model/task.js");

const app = express();

// specifying port for local as well as remote
const port = 3000 || process.env.PORT;

app.use(express.json());

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
