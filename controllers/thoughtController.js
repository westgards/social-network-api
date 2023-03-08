const { User, Thought } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single comment
  getSingleComment(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that id" })
          : res.json(comment)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    Comment.create(req.body)
      .then((thought) => {
        return Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((post) =>
        !post
          ? res
              .status(404)
              .json({ message: "thought created, but no posts with this ID" })
          : res.json({ message: "thought created" })
      )
      .catch((err) => {
        console.error(err);
      });
  },
};
