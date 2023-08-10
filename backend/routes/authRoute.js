const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const app = express.Router();

app.post("/register", createUser);
app.post("/login", loginUserCtrl);
app.get("/all-users", getallUser);
app.get("/:id", authMiddleware, isAdmin, getaUser);
app.delete("/:id", deleteaUser);
app.put("/edit-user", authMiddleware, updatedUser);
app.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
app.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = app;
