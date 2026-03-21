const mongoose = require("mongoose");

const AppChats = new mongoose.Schema({

    _id: {type: Number, required: true},
    userId: {type: Number, required: true},
    storeId: {type: Number, required: true},
    storeName: {type: String, required: true},
    storeImage: {type: String, required: true},
    lastMessage: {type: String, required: true},
    lastMessageTime: {type: String, required: true},
    unreadCount: {type: Number, required: true},
    status: {type: String, required: true},
    createdAt: {type: String, required: true}

});

module.exports = mongoose.model("appchats", AppChats, "chatsApp");