const express = require("express");
const router = express.Router();

const {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
  getComment,
} = require("../controllers/comments.js");

router.route("/").get(getAllComments);
router.route("/").post(createComment);
router.route("/:id").get(getComment);
router.route("/:id").patch(updateComment);
router.route("/:id").delete(deleteComment);

module.exports = router;
