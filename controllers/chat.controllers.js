const AppChats = require("../models/chats");

const getChats = async (req,res) =>{
    try{
        const chats = await AppChats.find();
        res.json(chats);
    }catch (error){
        res.status(500).json({mensaje: "Error no se encontro chat"});
    }
};

const postChats = async (req,res) =>{
    try{
        const nuevoChats = await AppChats.create(req.body);
        res.status(201).json(nuevoChats);
    }catch (error){
        res.status(400).json({mensaje: "No se pudo crear nuevo chat"});
    }

};



module.exports = {getChats, postChats};