const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
// Post request for register a user and get all users
router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
// User authentication on login
router.post("/login", authUser);

module.exports = router;
