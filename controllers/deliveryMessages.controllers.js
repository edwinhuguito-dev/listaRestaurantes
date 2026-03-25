const deliveryMessages = require("../models/deliveryMessages");

const getMessages = async (req, res) =>{
    try{
        const messages = await deliveryMessages.find();
        res.json(messages);
    }catch (error){
        res.status(500).json({mensaje: "Error no se encontro mensaje"});
    }
};


const postMessages = async (req,res) => {
    try{
        const nuevoMessage = await deliveryMessages.create(req.body);
        res.status(201).json(nuevoMessage);
    }catch (error){
        res.status(400).json({mensaje: "No se puede crear nuevo mensaje"});
    }
};

module.exports = {getMessages, postMessages};