const deliveryChats = require("../models/deliveryChats");

const getDeliveryChats = async (req,res) => {
    try{
        const chatDelivery = await deliveryChats.find();
        res.json(chatDelivery);
    }catch (error){
        res.status(500).json({mensaje: "Error no se creo el chat"});
    }
};

const postDeliveryChats = async (req,res) => {
    try{
        const postChats = await deliveryChats.create(req.body);
        res.status(201).json(postChats);
    }catch (erro){
        res.status(400).json({mensaje: "No se puede crear nuevo usuario"});
    }
};

module.exports = {getDeliveryChats, postDeliveryChats};