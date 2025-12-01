import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

// Requerimiento #4: Rutas
router.post('/login', AuthController.login);

export default router;