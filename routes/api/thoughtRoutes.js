const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  // updateThought,
  // deleteThought,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

router.route("/").post(createThought);

module.exports = router;
