const express = require("express");
const router = express.Router();


const{getRestaurantes, postRestaurantes, putRestaurantes,
    eliminarRestaurantes} = require("../controllers/appRestaurantes.controllers");

    router.get("/", getRestaurantes);
    router.post("/", postRestaurantes);
    router.put("/:idLocal", putRestaurantes);
    router.delete("/:idLocal", eliminarRestaurantes);

module.exports = router;


