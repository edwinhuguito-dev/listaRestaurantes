const express = require("express");
const router = express.Router();

const{getRegister, postRegister, postLogin} = require("../controllers/registerUsuario.controller");

router.get("/", getRegister);
router.post("/", postRegister);
router.post("/", postLogin)

module.exports = router;