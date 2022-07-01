const Comment = require("./model/comment");

class CommentActions {
  // ADD comment
  async saveComment(req, res) {
    const id = req.body.id;
    const content = req.body.content;
    const createdAt = req.body.createdAt;
    const score = req.body.score;
    const user = req.body.user;
    const replies = req.body.replies;

    const comment = new Comment({
      id: id,
      content: content,
      createdAt: createdAt,
      score: score,
      user: user,
      replies: replies,
    });

    try {
      await comment.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(comment);
  }
  // GET comments
  async getComments(req, res) {
    let comments;

    try {
      comments = await Comment.find({});
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json(comments);
  }

  // GET comment
  async getComment(req, res) {
    const id = req.params.id;
    let comment;

    try {
      comment = await Comment.findOne({ id: id });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json(comment);
  }

  // UPDATE comment
  async updateComment(req, res) {
    const id = req.params.id;
    const content = req.body.content;
    const createdAt = req.body.createdAt;
    const score = req.body.score;
    const replies = req.body.replies;
    let comment;

    try {
      comment = await Comment.findOne({ id: id });

      comment.content = content;
      comment.createdAt = createdAt;
      comment.score = score;
      comment.replies = replies;

      await comment.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(200).json(comment);
  }
  // DELETE comment
  async deleteComment(req, res) {
    const id = req.params.id;

    await Comment.deleteOne({ id: id });

    return res.status(204);
  }
}

module.exports = new CommentActions();
