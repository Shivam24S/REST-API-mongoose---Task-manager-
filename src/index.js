const express = require("express");

const app = express();

// specifying port for local as well as remote
const port = 3000 || process.env.PORT;

app.post("/users", (req, res) => {});

app.listen(port, () => {
  console.log("server running on port " + port);
});
