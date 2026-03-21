const mongoose = require("mongoose");

const AppUsers = new mongoose.Schema({

    _id: {type: Number, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    role: {type: String, required: true},
    profileImage: {type: String, required: true},
    createdAt: {type: String, required: true}


});

module.exports = mongoose.model("appusers", AppUsers, "usuariosApp");