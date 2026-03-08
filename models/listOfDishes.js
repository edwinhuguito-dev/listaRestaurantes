const mongoose = require("mongoose");

const listaDishes = new mongoose.Schema({

    idLocal: {type: Number, required: true, unique: true},
    imgUrl: {type: String, required: true},
    tituloPlato: {type: String, required: true},
    ingrediente: {type: String, required: true}

});

module.exports = mongoose.model("ListaDishes", listaDishes, "listOfDishes");