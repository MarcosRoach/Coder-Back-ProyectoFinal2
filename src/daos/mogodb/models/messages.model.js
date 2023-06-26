import mongoose from "mongoose";

//Iniciar Coleccion de Mensajes
const messagesCollection = "messages";

const messagesSchema = new mongoose.Schema({
  user: { type: "String", required: true, max: 100 },
  message: { type: "String", required: true, max: 100 },
});

//Exportar modelo
export const messagesModel = mongoose.model(messagesCollection, messagesSchema);
