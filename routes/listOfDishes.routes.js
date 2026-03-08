const express = require("express");
const router = express.Router();


const {getDishes, postDishes, putDishes, eliminarDishes} = require
("../controllers/listOfDishes.controllers");


router.get("/", getDishes);
router.post("/", postDishes);
router.put("/:idLocal", putDishes);
router.delete("/:idLocal", eliminarDishes);

module.exports = router