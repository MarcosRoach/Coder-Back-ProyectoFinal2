import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

// //Iniciar Coleccion de Productos
const productsCollection = "products";

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 50, index: true },
  description: { type: String, required: true, max: 100 },
  code: { type: String, required: true, max: 14, index: true },
  price: { type: Number, required: true },
  status: { type: Boolean, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true, max: 50 },
  thumbnail: { type: String, max: 100 },
});

//Paginacion
productsSchema.plugin(mongoosePaginate);

// //Exportar modelo
export const productsModel = mongoose.model(productsCollection, productsSchema);
