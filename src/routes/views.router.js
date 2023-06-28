import { Router } from "express";
import __dirname from "../utils.js";
import ProductManager from "../daos/filesystem/ProductManager.js";

let productManager = new ProductManager();

const router = Router();

router.get("/", async (req, res) => {
  let products = await productManager.getProducts();
  res.render("home", {
    title: "Inicio",
    products: products,
  });
});

router.get("/products", async (req, res) => {
  console.log(req);
  res.render("products");
});

export default router;
