const express = require("express");
const router = express.Router();

const{getRegister, postRegister} = require("../controllers/registerUsuario.controller");

router.get("/", getRegister);
router.post("/", postRegister);

module.exports = router;