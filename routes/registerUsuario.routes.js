const {verificarToken} = require("../middleware/auth.middlware");
const express = require("express");
const router = express.Router();

const{getRegister, postRegister, postLogin} = require("../controllers/registerUsuario.controller");

router.get("/", verificarToken,getRegister);
router.post("/", postRegister);
router.post("/login", postLogin)

module.exports = router;