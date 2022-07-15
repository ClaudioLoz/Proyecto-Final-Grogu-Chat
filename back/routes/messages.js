const { addMessage, getMessages,getMessagesStatistics } = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);
router.post("/getmsgStatistics/", getMessagesStatistics);

module.exports = router;