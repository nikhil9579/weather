const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/weather.html");
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
