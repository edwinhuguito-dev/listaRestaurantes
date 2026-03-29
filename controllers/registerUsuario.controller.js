const bcrypt = require("bcrypt");
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
        const {name, nickname, avatarUrl, phone, email, password} = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newRegister = await registerUsuario.create({
            name, nickname, avatarUrl, phone, email, password: hashedPassword});
        res.status(201).json({
            mensaje: "Usuario registrado con éxito",
            usuario: newRegister});
        }catch (error){
            console.log(error);
            res.status(400).json({mensaje:"No se pudo crear usuario",
                                    detalle: error.message});

    }
};


module.exports = {getRegister, postRegister};