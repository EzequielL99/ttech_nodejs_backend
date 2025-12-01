import jwt from "jsonwebtoken";
import "dotenv/config";

// Requerimiento #7: Proteger Rutas
export const generateToken = (userData) => {
  const jwtPayload = {
    id: userData.id,
    email: userData.email,
  };

  const jwtOptions = {
    expiresIn: "1h",
  };

  return jwt.sign(jwtPayload, process.env.JWT_SECRET, jwtOptions);
};
