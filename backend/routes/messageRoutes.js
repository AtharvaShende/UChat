const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
// fetch all message of a chat 
router.route("/:chatId").get(protect, allMessages);
// sending a message
router.route("/").post(protect, sendMessage);

module.exports = router;
