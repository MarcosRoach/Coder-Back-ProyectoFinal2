import mongoose from "mongoose";

//Iniciar Coleccion de Carrito
const cartsCollection = "carts";

const cartsSchema = new mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    default: [],
  },
});

//Exportar modelo
export const cartsModel = mongoose.model(cartsCollection, cartsSchema);
