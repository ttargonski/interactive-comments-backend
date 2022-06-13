const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const commentActions = require("./actions/commentActions");
const getCurrentUser = require("./actions/userActions");
const config = require("./config");

// database
const mongoose = require("mongoose");
mongoose.connect(config.db);

// router
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/", router);

app.listen(config.port, () => {
  console.log("Server works on port: " + config.port);
});

// --- COMMENTS ROUTES ---

router.get("/comments", commentActions.getComments);

router.get("/comments/:id", commentActions.getComment);

router.post("/comments", commentActions.saveComment);

router.put("/comments/:id", commentActions.updateComment);

router.delete("/comments/:id", commentActions.deleteComment);

// ---- USER ROUTE
router.get("/currentUser/:username", getCurrentUser);
