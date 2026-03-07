const express = require("express");
const router = express.Router();


const {obtenerRestaurantes,
    crearRestaurantes,
    actualizarRestaurantes,
    eliminarRestaurantes
} = require("../controllers/listaRestaurantes.controllers");

router.get("/", obtenerRestaurantes);
router.post("/", crearRestaurantes);
router.put("/:idLocal", actualizarRestaurantes);
router.delete("/:idLocal",eliminarRestaurantes);

module.exports = router;