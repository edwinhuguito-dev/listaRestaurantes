const mongoose = require("mongoose");

const deliveryUser = new mongoose.Schema({
    _id: {type: Number, required: true},
    name: {type: String, required: true},
    phone: {type: String, required: true},
    role: {type: String, required: true},
    profileImage: {type: String, required: true},
    vehicle: {type: String, required: false},
    plate: {type: String, required: false},
    createdAt: {type: String, required: true}

});

module.exports = mongoose.model("deliveryuser", deliveryUser, "deliveyUser");