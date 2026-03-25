const express = require("express");
const router = express.Router();

const { getUsers, postUsers, putUsuario} = require("../controllers/userApp.controllers");

router.get("/", getUsers);
router.post("/", postUsers);
router.put("/:id", putUsuario);

module.exports = router