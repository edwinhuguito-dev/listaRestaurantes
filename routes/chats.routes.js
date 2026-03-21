const express = require("express");
const router = express.Router();

const{getChats, postChats} = require("../controllers/chat.controllers");

router.get("/", getChats);
router.post("/", postChats);

module.exports = router;