const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  user: {
    image: {
      png: { type: String },
      webp: { type: String },
    },
    username: { type: String, required: true },
  },
  replies: {
    type: Array,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
