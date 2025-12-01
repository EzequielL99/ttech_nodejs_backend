import jwt from "jsonwebtoken";
import "dotenv/config";

// Requerimiento #7: Proteccion de Rutas
export const authenticate = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    const error = new Error("No Autorizado");

    return res.status(403).json({
      error: error.message,
    });
  }

  const token = bearer.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (error) => {
    if (error) res.status(401).json({ error: "Token expirado o invalido" });

    next();
  });
};
