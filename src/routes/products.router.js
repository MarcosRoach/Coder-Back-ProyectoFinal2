//Router User
import { Router } from "express";
import ProductManager from "../daos/filesystem/ProductManager.js";

const router = Router();

//Instancia ProductManager
const productManager = new ProductManager();

//Get Productos de bd con limite, pagina, orden, query
router.get("/", async (req, res) => {
  //Limite de productos
  const limite = Number(req.query.limite) || 10;
  const orden = Number(req.query.orden) || 0;
  const pagina = Number(req.query.pagina) || 1;
  const filtro = req.query.filtro || null;
  const filtroVal = req.query.filtroVal || null;

  //Respuesta
  res.send(
    await productManager.getProducts(filtro, filtroVal, limite, orden, pagina)
  );
});

//Get by id
router.get("/:pid", async (req, res) => {
  //Id
  const pid = req.params.pid;

  //Respuesta
  res.send(await productManager.getProductById(pid));
});

// Post
router.post("/", async (req, res) => {
  //Body
  let producto = JSON.stringify(req.body);

  //Respuesta
  res.send(await productManager.addProduct(producto));
});

// Put
router.put("/:pid", async (req, res) => {
  //Id
  const pid = req.params.pid;
  //body
  let producto = JSON.stringify(req.body);

  //Respuesta
  res.send(await productManager.updateProduct(pid, producto));
});

// Delete
router.delete("/:pid", async (req, res) => {
  //Id
  const pid = req.params.pid;

  //Respuesta
  res.send(await productManager.deleteProduct(pid));
});

export default router;
