const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  image: {
    png: { type: String, required: true },
    webp: { type: String, required: true },
  },
  username: {
    type: String,
    required: true,
  },
});

const currentUser = mongoose.model("currentUser", userSchema);

module.exports = currentUser;
