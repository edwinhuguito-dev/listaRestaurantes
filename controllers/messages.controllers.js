const AppMessages = require("../models/messages");

const getMessages = async (req,res) =>{
    try{
        const mensajes = await AppMessages.find();
        res.json(mensajes);
    }catch (error){
        res.status(500).json({mensajes: "Error no se encontro el mensaje"});
        }
};


const postMessages = async (req,res) =>{
    try{
        const nuevoMensaje = await AppMessages.create(req.body);
        res.status(201).json(nuevoMensaje);
    }catch (error){
        res.status(400).json({mensaje: "No se puedo crear nuevo mensaje"});
    }
};


module.exports = {getMessages, postMessages};