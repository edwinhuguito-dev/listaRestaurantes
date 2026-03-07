const Restaurantes = require("../models/listaRestaurantes");

const obtenerRestaurantes = async(req, res) =>{
    try{
        const lista = await Restaurantes.find();
        res.json(lista);
    }catch (error){
        res.status(500).json({mensaje: "Error al obtener la lista de Restaurantes"});
    }
};


const crearRestaurantes = async (req, res) =>{
    try{
        const nuevoRestaurante = await Restaurantes.create(req.body);
        res.status(201).json(nuevoRestaurante);
    }catch (error){
        res.status(400).json({mensaje: "Error al crear restaurante"});
    }
};


const actualizarRestaurantes = async(req,res) =>{
    try{
        const restauranteActualizado = await Restaurantes.findOneAndUpdate(
            {idLocal: req.params.idLocal},
            req.body,
            {new:true}
        );

        if(!restauranteActualizado){
            return res.status(404).json({mensaje: "Restaurante no encontrado"});
        }

        res.json(restauranteActualizado);
    }catch (error){
        res.status(400).json({mensaje:"Error al actualizar restaurante"});
    }
};


const eliminarRestaurantes = async (req,res) =>{
    try{
        const restauranteEliminado = await Restaurantes.findOneAndDelete({idLocal: req.params.idLocal});

        if(!restauranteEliminado){
            return res.status(404).json({mensaje:"Restaurante no encontrado"});
        }
        res.json({mensaje: "Restaurante eliminado correctamente"});
    }catch (error){
        res.status(400).json({mensaje: "Error al eliminar restaurante"});
    }
};





module.exports = {obtenerRestaurantes, crearRestaurantes, actualizarRestaurantes, eliminarRestaurantes};