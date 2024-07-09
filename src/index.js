const express = require("express");
require("../src/db/mongoose.js");

const userRoute = require("../src/routes/userRoute.js");
const taskRoute = require("../src/routes/taskRoute.js");
const PracticeTaskRoute = require("../src/routes/practiceTask.js");

const app = express();
app.use(userRoute);
app.use(taskRoute);
app.use(PracticeTaskRoute);

// specifying port for local as well as remote
const port = 3000 || process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log("server running on port " + port);
});
