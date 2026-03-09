const mongoose = require("mongoose");

const Datos = new mongoose.Schema({

    idLocal: {type: String, required: true, unique: true},
    nombre: {type: String, required: true},
    link: {type: String, required: true}


    

});

module.exports = mongoose.model("DatosRamdon", Datos, "datosRamdon");