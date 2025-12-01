import { generateToken } from "../utils/jwt.js";

const DEFAULT_USER = {
  email: "admin@admin.com",
  password: "admin",
};

// Requerimiento #6: Servicios
export default class AuthService {
  static login = (userData) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          userData.email !== DEFAULT_USER.email ||
          userData.password !== DEFAULT_USER.password
        ) {
          resolve({
            status: "error",
            detail: "Credenciales invalidas",
          });
        }

        const token = generateToken(userData);

        resolve({
          status: "ok",
          token,
        });
      }, 1000);
    });
}
