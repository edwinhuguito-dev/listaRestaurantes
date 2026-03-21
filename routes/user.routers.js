const express = require("express");
const router = express.Router();

const { getUsers, postUsers} = require("../controllers/userApp.controllers");

router.get("/", getUsers);
router.post("/", postUsers);

module.exports = router