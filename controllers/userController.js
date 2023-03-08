const { User, Thought } = require("../models");

module.exports = {
  getThoughts(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleComment(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that id" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createUser(req, res) {
    Comment.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { users: user._id } },
          { new: true }
        );
      })
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
