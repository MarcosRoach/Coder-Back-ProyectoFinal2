//Router Carts
import { Router } from "express";
import CartManager from "../daos/filesystem/CartManager.js";

const router = Router();

//Instancia CartManager
const cartManager = new CartManager();

//Get By id
router.get("/:cid", async (req, res) => {
  //Id
  const cid = req.params.cid;

  res.send(await cartManager.getCartById(cid));
});

//Get All
router.get("/", async (req, res) => {
  //Respuesta
  const carts = await cartManager.getAllCarts();

  if (carts.length === 0) {
    return res.send({ error: "No hay carritos" });
  }

  res.send(carts);
});

//Post
router.post("/", async (req, res) => {
  //Respuesta
  res.send(await cartManager.newCart());
});

//Post Product to Cart
router.post("/:cid/product/:pid", async (req, res) => {
  //Id
  const cid = req.params.cid;
  const pid = req.params.pid;

  //Respuesta
  res.send(await cartManager.addProductToCart(cid, pid));
});

//put Products from Cart to array
router.put("/:cid", async (req, res) => {
  //Id
  const cid = req.params.cid;
  //Array de productos
  const arrProducts = req.body;

  //Respuesta
  res.send(await cartManager.putProductsToCart(cid, arrProducts));
});

//put Cantidad de productos en el carrito
router.put("/:cid/products/:pid", async (req, res) => {
  //Id
  const cid = req.params.cid;
  const pid = req.params.pid;
  //Cantidad
  const quantity = Number(req.body.quantity);

  //Respuesta
  res.send(await cartManager.putQuantityOfProductsInCart(cid, pid, quantity));
});

//Delete Product from Cart
router.delete("/:cid/products/:pid", async (req, res) => {
  //Id
  const cid = req.params.cid;
  const pid = req.params.pid;

  //Respuesta
  res.send(await cartManager.deleteProductFromCart(cid, pid));
});

//Delete all products from Cart
router.delete("/:cid", async (req, res) => {
  //Id
  const cid = req.params.cid;

  //Respuesta
  res.send(await cartManager.deleteAllProductsFromCart(cid));
});

export default router;
