import AuthService from "../services/auth.service.js";

// Requerimiento #5: Controladores
export default class AuthController {
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const response = await AuthService.login({
        email,
        password,
      });

      if (response.status === "error") {
        return res.status(401).json({
          error: response.detail,
          credentials: {
            email: "admin@admin.com",
            password: "admin",
          },
        });
      }

      return res.json({
        token: response.token,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
