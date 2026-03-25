const express = require("express");
const router = express.Router();

const{getDeliveryChats, postDeliveryChats} = require("../controllers/deliveryChats.controllers");

router.get("/", getDeliveryChats);
router. post("/", postDeliveryChats);

module.exports = router;