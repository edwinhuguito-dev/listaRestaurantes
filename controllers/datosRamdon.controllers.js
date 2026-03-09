const DatosRamdon = require("../models/datosRamdon");

const getDatos = async (req,res) =>{
    try{
        const datos = await DatosRamdon.find();
        res.json(datos);
    }catch (error){
        res.status(500).json({mensaje: "Error no se encontro el Dato"});
    }    
};

const postDatos = async (req,res) =>{
    try{
        const nuevoDatos = await DatosRamdon.create(req.body);
        res.status(201).json(nuevoDatos);
    }catch (error){
        res.status(400).json({mensaje: "No se pudo crear nuevo Dato"});
    }
};

const putDatos = async (req,res) =>{
    try{
        const modiDatos = await DatosRamdon.findOneAndUpdate(
            {idLocal: req.params.idLocal},
            req.body,
            {new:true}
        );
        if(!modiDatos){
            return res.status(404).json({mensaje: "No se encontro el dato para actualizar"});
        }
        res.json(modiDatos);
    }catch (erro){
        res.status(400).json({mensaje: "No se pudo actualizar los datos"});
    }
};

const eliminarDatos = async (req,res) =>{
    try{
        const borrarDatos = await DatosRamdon.findOneAndDelete({idLocal: req.params.idLocal});
      if(!borrarDatos){
        return res.status(404).json({mensaje:"No se encontro Datos"});
      }
      res.json({mensaje: "Se elimino correctamente el Dato"});
    }catch (error){
        res.status(400).json({mensaje: "Error al eliminar DAto"});
    }

};


module.exports = {getDatos, postDatos, putDatos, eliminarDatos};