import { getAllProductsController, getProductByIdController } from "./controllers/products.controller.js";

const params = process.argv.slice(2);

const [method, path] = params;

// Formato Tipo Request
const request = {
  method,
  path,
  body: params.slice(2),
};

const makeRequest = async (request) => {
  const { method, path, body } = request;

  switch (method.toUpperCase()) {
    case "GET":
        // Todos los productos | Producto por ID
      if (path && path === "products") {
        const response = await getAllProductsController();

        if (response.error) {
          console.log(response.message);
        } else {
          console.log(response.data);
        }
      } else if (path && path.includes("products/")) {
        const id = path.substring(path.indexOf("/") + 1);

        const response = await getProductByIdController(id);
        console.log(response);
      } else {
        console.log("Parametros insuficientes o invalidos");
      }

      break;
    case "POST":
      console.log("Peticion POST");
      break;
    case "DELETE":
      console.log("Peticion DELETE");
      break;
    default:
      console.log("Tipo de petición HTTP no soportado.");
      break;
  }
};

if (request) makeRequest(request);
