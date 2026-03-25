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



const putUsuario = async (req,res) =>{
    try{
        const nuevoPut = await AppUsers.findOneAndUpdate(
            {id: req.params._id},
            req.body,
            {returnDocument: "after"}
        );
        if(!nuevoPut){
            return res.status(404).json({mensaje: "No se encontro el Usuario"});
        }
        res.json(nuevoPut);
    }catch (error){
        res.status(400).json({mensaje: "No se pudo actualizar la imagen del usuario"});
    }
};

module.exports = {getUsers, postUsers, putUsuario};