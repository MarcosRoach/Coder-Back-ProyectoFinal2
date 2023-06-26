//Importar router de express
import { Router } from "express";

//Inicializar router
const router = Router();

//Rutas
router.get("/", (req, res) => {
  res.render("home");
});

//Exportar router
export default router;
