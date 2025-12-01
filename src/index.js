import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

const PORT = 3001;
const app = express();

// Requerimiento #3: CORS
app.use(cors());

// Requerimiento #3: No instalo body-parser porque Express ya tiene resuelta la situacion
app.use(express.json());

// Requerimiento #4: RUTAS
app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);

// Requerimiento #3: 404 - Rutas desconocidas
app.use((req, res) => {
  res.status(404).send("Pagina o recurso no encontrado");
});

app.listen(PORT, () => console.log(`Servidor ejecutando en el puerto ${PORT}`));
