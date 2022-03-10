const Post = require("../models/Post");
const User = require("../models/User");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(201).json({ posts });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const getPost = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  try {
    const post = await Post.findOne({ _id: id });
    if (!post) {
      return res.status(404).json({ msg: `user with ${id} not found` });
    }
    res.status(201).json({ post });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) {
      return res.status(404).json({ msg: `user with ${id} ont found` });
    }
    res.status(201).json({ post });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.deleteOne({ _id: id });
    if (!post) {
      return res.status(404).json({ msg: `post with ${id} not found` });
    }
    res.status(201).json({ post });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const createPost = async (req, res) => {
  try {
    const { userID, description, title, snippet } = req.body;
    const user = await User.findOne({ _id: userID });
    console.log("first", user);
    console.log("second", user.username);
    const post = await Post.create({
      userID,
      description,
      title,
      snippet,
      username: user.name,
    });
    res.status(201).json({ post });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const userPost = async (req, res) => {
  try {
    const { userID } = req.params;
    const posts = await Post.find({ userID: userID });
    if (!posts) {
      res.status(404).json({ msg: "not found" });
    }
    res.status(201).json({ posts });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

module.exports = {
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  createPost,
  userPost,
};
