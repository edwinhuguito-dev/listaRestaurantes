const AppUsers = require("../models/users");

const getUsers = async (req,res) =>{
    try{
        const usuario = await AppUsers.find();
        res.json(usuario);
    }catch (error){
        res.status(500).json({mensaje: "Error no se encontro Usurio"});
    }
};


const postUsers = async (req,res) =>{
    try{
        const nuevoUsuario = await AppUsers.create(req.body);
        res.status(201).json(nuevoUsuario);
    }catch (error){
        res.status(400).json({mensaje: "No se pudo crear nuevo Usuario"});
    }
};

module.exports = {getUsers, postUsers};