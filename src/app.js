// Modulo express
import express from "express";
import productRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import messagesRouter from "./routes/messages.router.js";
import db from "./daos/db/mongo.js";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import { Server } from "socket.io";

//Inicializar express
const app = express();
app.use(express.urlencoded({ extended: true }));

//Middelware para recibir json
app.use(express.json());

//Carpetas estaticas
app.use(express.static(__dirname + "/public"));

//Configuracion de handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//Levantar el servidor

const port = 8080;
const expressServer = app.listen(port, () => {
  console.log(`Servidor express corriendo en el puerto ${port}`);
});
//concetar a la base de datos
db();
//Inicializar socket.io
const socketServer = new Server(expressServer);

//Router User
app.use("/api/products", productRouter);

//Router Carts
app.use("/api/carts", cartsRouter);

//Router Mensajes
app.use("/api/messages", messagesRouter);

//Socket.io connection
const mensajes = [];
socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!: " + socket.id);

  //Recibo Mensajes
  socket.on("message", (data) => {
    //Guardar mensaje
    mensajes.push({ socketId: socket.id, message: data });
    //Actualizar mensajes
    socketServer.emit("imprimir", mensajes);
  });
});
