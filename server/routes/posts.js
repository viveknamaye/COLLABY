const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
  userPost,
} = require("../controllers/Posts.js");

router.route("/").get(getAllPosts);
router.route("/").post(createPost);
router.route("/:id").get(getPost);
router.route("/:id").patch(updatePost);
router.route("/:id").delete(deletePost);
router.route("/users/:userID").get(userPost);

module.exports = router;
