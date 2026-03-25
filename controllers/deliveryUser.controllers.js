const deliveryUser = require("../models/deliveryUser");

const getDeliveryUser = async (req,res) =>{
    try{
        const chatsUser = await deliveryUser.find();
        res.json(chatsUser);
    }catch (error){
        res.status(500).json({mensaje: "Error no se encontro el usuario"});
        }
};


const postDeliveryUser = async (req,res) =>{
    try{
        const nuevoUser = await deliveryUser.create(req.body);
        res.status(201).json(nuevoUser);
    }catch (error){
        res.status(400).json({mensaje: "No se puede crear nuevo usuario"});
    }
};

module.exports = {getDeliveryUser, postDeliveryUser};