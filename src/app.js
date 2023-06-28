import express from "express";
import handlebars from "express-handlebars";

import __dirname from "./utils.js";

import db from "./daos/db/mongo.js";

import productRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import routerViews from "./routes/views.router.js";
import messagesRouter from "./routes/messages.router.js";

import { Server } from "socket.io";

import ProductManager from "./daos/filesystem/ProductManager.js";

//Inicializar express
const app = express();

//Middelware para recibir json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

//Inicializar socket.io
const socketServer = new Server(expressServer);

//concetar a la base de datos
db();

//Socket.io connection
socketServer.on("connection", async (socket) => {
  console.log("Nuevo cliente conectado! + " + socket.id);

  //Intancia de productos
  let productManager = new ProductManager();

  //Enviar productos al cliente que se conectó

  socket.emit(
    "getProducts",
    await productManager.getProducts("category", "Electrónicos", 3, -1)
  );

  //Agregar producto y renderizar en el cliente el nuevo producto
  socket.on("add-product", async (productData) => {
    await productManager.addProduct(productData);
    socketServer.emit("productos", await productManager.getProducts());
  });

  //Eliminar producto y renderizar en el cliente
  socket.on("delete-product", async (productID) => {
    await productManager.deleteProduct(productID);
    socketServer.emit("productos", await productManager.getAllProducts());
  });
});

//Middelware para pasar socketServer a los routers
app.use((req, res, next) => {
  req.socketServer = socketServer;
  next();
});

//Router Views
app.use("/", routerViews);

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
