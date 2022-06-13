const currentUser = require("./model/user");

const getCurrentUser = async (req, res) => {
  const username = req.params.username;
  let user;
  try {
    user = await currentUser.findOne({ username: username });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.status(200).json(user);
};

module.exports = getCurrentUser;
