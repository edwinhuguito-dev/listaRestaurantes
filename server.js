require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const listaRestaurantesRoutes = require("./routes/listaRestaurantes.routes");
const appRestaurantesRoutes = require("./routes/appRestaurantes.routes");
const listOfDishesRoutes = require("./routes/listOfDishes.routes");
const datosRamdonRoutes = require("./routes/datosRamdon.routes");
const userRoutes = require("./routes/user.routers");
const mensajesRoutes = require("./routes/messages.router");
const chatsRoutes = require("./routes/chats.routes");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/listaRestaurantes", listaRestaurantesRoutes);
app.use("/appRestaurantes", appRestaurantesRoutes);
app.use("/listOfDishes", listOfDishesRoutes);
app.use("/datosRamdon", datosRamdonRoutes);
app.use("/mensajesApp", mensajesRoutes);
app.use("/usuariosApp", userRoutes);
app.use("/chatsApp", chatsRoutes);






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