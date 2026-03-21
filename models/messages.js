const mongoose = require("mongoose");

const AppMessages = new mongoose.Schema({
_id: {type: Number, required: true},
chatId: {type: Number, required: true,},
senderId: {type: Number, required: true,},
senderType: {type: String, required: true},
text: {type: String, required: true},
messageType: {type: String, required: true},
read: {type: Boolean, required: true},
createdAt: {type: String, required: true}


});

module.exports = mongoose.model("appmessages", AppMessages, "messagesApp");