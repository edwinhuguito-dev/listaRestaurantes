require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());


const Restaurantes = require("./models/listaRestaurantes");


app.get("/listaRestaurantes", async(req, res) =>{
    try{
        const datoGet = await Restaurantes.find();
        res.json(datoGet);
    }catch (error){
        res.status(500).json({msg:"error", error: error.message});
}
});

app.post("/listaRestaurantes", async(req,res) =>{
    try{
        const nuevoPost = await Restaurantes.create(req.body);
        res.status(201).json(nuevoPost);
    }catch (error){
        res.status(400).json({msg: "error", error: error.message});
    }
});


async function start(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a Mongo peeeeee");

        app.listen(process.env.PORT || 3000, () =>{
            console.log("El API esta en el puerto", process.env.PORT || 3000);
            });
        }catch (e){
            console.log("Hay un error peee", e.message);
        }
    }

    start();