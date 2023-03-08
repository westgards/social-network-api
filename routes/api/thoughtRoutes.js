const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require('../../controllers/thoughtController');

// /api/comments
router.route('/').get(getComments).post(createComment);

// /api/comments/:commentId
router.route('/:commentId').get(getSingleComment);

module.exports = router;