const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUserByEmail,
} = require("../controllers/users.js");

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUser);
router.route("/:id").patch(updateUser);
router.route("/:id").delete(deleteUser);

router.route("/login/:email").get(getUserByEmail);

module.exports = router;
