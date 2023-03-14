const express = require("express");
const db = require("./config/connection");
// Require models
const routes = require("./routes");
const { User } = require("./models");
const { Thought } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get("/all-users", (req, res) => {
  // Using model in route to find all documents that are instances of that model
  User.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
