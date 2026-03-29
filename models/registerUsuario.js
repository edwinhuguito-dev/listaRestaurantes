const mongoose = require("mongoose");

const registerUsuario = new mongoose.Schema({
    
    name: {type: String, required: true},
    nickname: {type: String, required: true, unique: true, trim: true},
    avatarUrl: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, trim: true},
    password: {type: String, required: true},
});

module.exports = mongoose.model("registroUsuario", registerUsuario, "registerUsuario");