const Comment = require("./model/comment");

class CommentActions {
  async saveComment(req, res) {
    const content = req.body.content;
    const createdAt = req.body.createdAt;
    const score = req.body.score;
    const user = req.body.user;
    const replies = req.body.replies;

    const note = new Comment({
      content: content,
      createdAt: createdAt,
      score: score,
      user: user,
      replies: replies,
    });

    try {
      await note.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(note);
  }
}
