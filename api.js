const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/nametest", (req, res) => {
  res.status(200).send({ firstname: "testy", lastname: "mctesterson" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
