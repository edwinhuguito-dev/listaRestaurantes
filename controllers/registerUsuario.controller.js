const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

const postLogin = async (req,res) =>{
    try{
        const { email, password} = req.body;

        const userFound = await registerUsuario.findOne({email});
        if(!userFound){
            return res.status(404).json({mensaje: "Usuario no encontrado"});
        }
        const match = await bcrypt.compare(password, userFound.password);

        if(match){
            const payload = {
                id: userFound._id,
                nickname: userFound.nickname
            };

            const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: "5h"});

            res.status(200).json({
                mensaje: "¡Login exitoso!",
                token: token,
                usuario: {
                    name: userFound.name,
                    nickname: userFound.nickname
                }
        });
    }else{
        res.status(401).json({mensaje: "Contraseña incorrecta"});
    }
    }catch (error){
        res.status(500).json({mensaje: "Error en el servidor", detalle: error.message});
    }
};





module.exports = {getRegister, postRegister, postLogin};