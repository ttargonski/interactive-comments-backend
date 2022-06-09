const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  replies: {
    type: Array,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
