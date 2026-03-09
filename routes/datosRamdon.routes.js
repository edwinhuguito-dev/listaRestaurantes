const express = require("express");
const router = express.Router();


const{getDatos, postDatos,putDatos, eliminarDatos}
= require("../controllers/datosRamdon.controllers");

router.get("/", getDatos);
router.post("/", postDatos);
router.put("/:idLocal", putDatos);
router.delete("/:idLocarl", eliminarDatos)

module.exports = router;