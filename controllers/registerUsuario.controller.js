const registerUsuario = require("../models/registerUsuario");

const getRegister = async (req, res) =>{
    try{
        const register = await registerUsuario.find();
        res.json(register);    
    }catch (error){
        res.status(500).json({mensajes: "Error no se pudo registrar"});
    }

};


const postRegister = async (req,res) =>{
    try{
        const newRegister = await registerUsuario.create(req,body);
        res.status(201).json(newRegister);
    }catch (error){
        res.status(400).json({mensaje: "No se pudo crear usuario"});
    }
};


module.exports = {getRegister, postRegister};