const ApiRestaurantes = require("../models/appRestaurantes");


const getRestaurantes = async (req,res) =>{
    try{
        const nombres = await ApiRestaurantes.find();
        res.json(nombres);
    }catch (error){
        res.status(500).json({mensaje: "Error no se encontro el Restaurante"});
    }
};


const postRestaurantes = async (req,res) =>{
    try{
        const nuevoPost = await ApiRestaurantes.create(req.body);
        res.status(201).json(nuevoPost);
    }catch (error){
        res.status(400).json({mensaje: "No se pudo crear un nuevo Restaurante"});
    }
};


const putRestaurantes = async (req,res) =>{
    try{
     const nuevoPut = await ApiRestaurantes.findOneAndUpdate(
        {idLocal: req.params.idLocal},
        req.body,
        {new:true}
     );

     if(!nuevoPut){
        return res.status(404).json({mensaje:"No se encontro el restaurante para actualizarlo"});
     }
     res.json(nuevoPut);
    }catch (error){
        res.status(400).json({mensaje: "No se pudo actualizar los datos del Restaurante"});
    }

};



const eliminarRestaurantes = async (req,res) =>{
    try{
        const borrarRestaurante = await ApiResturantes.findOneAndDelete({idLocal: req.params.idLocal});
        if(!borrarRestaurante){
            return res.status(404).json({mensaje:"No se encontro Restaurante para eliminarlo"});
        }
        res.json({mensaje:"Se elimino correctamente el Restaurante"});
    }catch (error){
        res.status(400).json({mensaje: "Error al eliminar Restaurante"});
    }
};

module.exports = {getRestaurantes, postRestaurantes, putRestaurantes, eliminarRestaurantes};



