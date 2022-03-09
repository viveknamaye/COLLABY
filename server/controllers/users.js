const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({ users });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const getUser = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ msg: `user with ${id} not found` });
    }
    res.status(201).json({ user });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ msg: `user with ${id} ont found` });
    }
    res.status(201).json({ user });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.deleteOne({ _id: id });
    if (!user) {
      return res.status(404).json({ msg: `user with ${id} not found` });
    }
    res.status(201).json({ user });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

const getUserByEmail = async (req, res) => {
  console.log("i am  here");
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(404).json({ msg: `user with ${email} not found` });
    }
    res.status(201).json({ user });
  } catch (err) {
    res.status(501).json({ msg: err });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
  getUserByEmail,
};
