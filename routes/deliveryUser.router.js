const express = require("express");
const router = express.Router();

const {getDeliveryUser, postDeliveryUser} = require("../controllers/deliveryUser.controllers");

router.get("/", getDeliveryUser);
router.post("/", postDeliveryUser);


module.exports = router;