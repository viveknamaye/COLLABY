const Comment = require("../models/Comment");

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(201).json({ comments });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const getComment = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  try {
    const comment = await Comment.findOne({ _id: id });
    if (!comment) {
      return res.status(404).json({ msg: `Comment with ${id} not found` });
    }
    res.status(201).json({ comment });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const updateComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!comment) {
      return res.status(404).json({ msg: `Comment with ${id} ont found` });
    }
    res.status(201).json({ comment });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.deleteOne({ _id: id });
    if (!comment) {
      return res.status(404).json({ msg: `Comment with ${id} not found` });
    }
    res.status(201).json({ comment });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json({ comment });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

module.exports = {
  getAllComments,
  getComment,
  updateComment,
  deleteComment,
  createComment,
};
