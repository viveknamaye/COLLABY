const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username : {
      type : String,
      required : true,
    },
    title: {
      type: String,
      required: true,
      min: 5,
      max: 70,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      min: 10,
      max: 500,
      trim: true,
    },
    github_link: {
      type: String,
      trim: true,
      min: 10,
      max: 100,
    },
    snippet: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
