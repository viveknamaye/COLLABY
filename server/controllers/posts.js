const Post = require("../models/Post");

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
    res.status(201).json({ user });
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
    const post = await Post.create(req.body);
    res.status(201).json({ post });
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
};
