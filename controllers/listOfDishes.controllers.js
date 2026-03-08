const ListaDishes = require("../models/listOfDishes");


const getDishes = async(req,res) =>{
    try{
        const nombre = await ListaDishes.find();
        res.json(nombre);
    }catch (error){
        res.status(500).json({mensaje: "Error no se encontro el Plato"});
    }
};


const postDishes = async(req,res) =>{
    try{
        const nuevoPost = await ListaDishes.create(req.body);
        res.status(201).json(nuevoPost);
    }catch (error){
        res.status(400).json({mensaje: "No se pudo crear nuevo Plato"});
    }
};


const putDishes = async(req,res) =>{
    try{
        const nuevoPut = await ListaDishes.findOneAndUpdate(
            {idlocal: req.params.idLocal},
            req.body,
            {new: true}
        );

        if(!nuevoPut){
            return res.status(404).json({mensaje: "No se encontro el plato para actuliazar"});
        }

        res.json(nuevoPut);
    }catch (error){
        res.status(400).json({mensaje: "No se pudo actualizar el plato"});
    }
};


const eliminarDishes = async (req, res) =>{
    try{
        const borrarDishes = await ListaDishes. findOneAndDelete({idLocal: req.params.idLocal});
        if(!borrarDishes){
            return res.status(404).json({mensaje: "No se encontro el Plato para eliminar"});
        }
        res.json({mensaje: "Se elimino correctamente el Plato"});
    }catch (error){
        res.status(400).json({mensaje: "Error al eliminar Plato"});
    }
};


module.exports = {getDishes, postDishes, putDishes,eliminarDishes};
