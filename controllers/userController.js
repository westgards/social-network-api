const { User, Thought } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that id" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "User created, but no thoughts with this ID" })
          : res.json({ message: "User created" })
      )
      .catch((err) => {
        console.error(err);
      });
  },
};
