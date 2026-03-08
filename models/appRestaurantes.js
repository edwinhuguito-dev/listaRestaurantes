    const mongoose = require("mongoose");

const AppRestaurantes = new mongoose.Schema({


    idLocal: {type: Number, required: true, unique: true},
    nombre: {type: String, required: true},
    frase: {type: String, required: true},
    imagenUrl: {type: String, required: true},
    hora: {type: String, required: true},
    frase1: {type: String, required: true},
    favorito: {type: Boolean, default: false},
    likes: {type: Number, require: true, default: 0}

});

module.exports = mongoose.model("ApiRestaurantes", AppRestaurantes, "appRestaurantes")