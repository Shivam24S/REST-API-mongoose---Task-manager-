const express = require("express");
require("../src/db/mongoose.js");
const user = require("../src/model/users.js");

const app = express();

// specifying port for local as well as remote
const port = 3000 || process.env.PORT;

app.use(express.json());

app.post("/users", (req, res) => {
  const userData = new user(req.body);

  userData
    .save()
    .then(() => {
      console.log("user details saved");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.listen(port, () => {
  console.log("server running on port " + port);
});
