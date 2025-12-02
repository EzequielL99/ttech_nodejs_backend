import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middlewares/handleInputErrors.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

// Requerimiento #4: Rutas
router.get("/", ProductController.getAllProducts);
router.get(
  "/:id",
  param("id").isString().withMessage("ID invalido"),
  handleInputErrors,
  ProductController.getProductById
);

// Requerimiento #7: Proteccion de Rutas
router.post(
  "/",
  authenticate,
  // Validacion
  body("category").notEmpty().withMessage("La categoria es obligatoria"),
  body("description")
    .notEmpty()
    .withMessage("La descripcion es obligatoria")
    .isLength({ min: 5 })
    .withMessage("La descripcion debe poseer al menos 5 caracteres"),
  body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
  body("price")
    .isNumeric()
    .withMessage("El precio del producto debe ser numerico")
    .notEmpty()
    .withMessage("El precio del producto es obligatorio")
    .custom((value) => value > 0)
    .withMessage("El precio debe ser un valor positivo"),
  body("stock")
    .isNumeric()
    .withMessage("El stock del producto debe ser numerico")
    .notEmpty()
    .withMessage("El stock debe poseer un valor")
    .custom((value) => value > 0)
    .withMessage("El stock debe ser un valor positivo"),
  handleInputErrors,
  ProductController.createProduct
);

// Requerimiento #7: Proteccion de Rutas
router.delete("/:id", authenticate, ProductController.deleteProduct);

export default router;
