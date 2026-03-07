const mongoose = require("mongoose");

const AppRestaurantes = new mongoose.Schema({


    idLocal: {type: Number, required: true, unique: true},
    nombre: {type: String, required: true},
    frase: {type: String, required: true},
    imagenUrl: {type: String, required: true}

});

module.exports = mongoose.model("ApiRestaurantes", AppRestaurantes, "appRestaurantes")