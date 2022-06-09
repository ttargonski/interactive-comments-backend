const express = require("express");
const app = express();

// router
const router = express.Router();

// default port
const port = process.env.PORT || 3001;

app.use("/api/", router);

app.listen(port, () => {
  console.log("Server works on port: " + port);
});

// --- ROUTES ---

// GET comments
router.get("/comments", () => {});
// GET one comment
router.get("/comments/:id", () => {});
// POST one comment
router.post("/comments", () => {});
// PUT one comment
router.put("/comments/:id", () => {});
// DELETE one comment
router.delete("/comments/:id", () => {});
