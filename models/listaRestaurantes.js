const mongoose = require("mongoose");

const restaurantes = new mongoose.Schema({

    idLocal: {type: Number, required: true},
    nombre: {type: String, required: true},
    imagen: {type: String, required: true},
    frase: {type: String, required: true}
});

module.exports = mongoose.model("Restaurantes", restaurantes, "listaRestaurantes")