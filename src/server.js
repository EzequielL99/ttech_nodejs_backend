import {
  addProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
} from "./controllers/products.controller.js";

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
      // Todos los productos
      if (path && path === "products") {
        const products = await getAllProductsController();

        if (products.error) return console.log(products.message);

        return console.log(products);
      }

      // Producto por ID
      if (path && path.includes("products/")) {
        const id = path.substring(path.indexOf("/") + 1);

        const product = await getProductByIdController(id);

        if (product.error) return console.log(product.message);

        return console.log(product);
      }

      return console.log("Parametros insuficientes o invalidos");
      break;
    case "POST":
      if (body) {
        const response = await addProductController(body);

        if (response.error) return console.log(response.message);

        return console.log(response);
      }

      return console.log("Parametros insuficientes o invalidos");
      break;
    case "DELETE":
      if (path && path.includes("products/")) {
        const id = path.substring(path.indexOf("/") + 1);

        const response = await deleteProductController(id);

        if (response.error) return console.log(response.message);

        return console.log(response);
      }

      return console.log("Parametros insuficientes o invalidos");
      break;
    default:
      console.log("Tipo de petición HTTP no soportado.");
      break;
  }
};

if (request) makeRequest(request);
