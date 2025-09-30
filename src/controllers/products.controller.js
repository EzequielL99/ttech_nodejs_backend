import {
  addProductAction,
  deleteProductAction,
  getAllProductsAction,
  getProductByIdAction,
} from "../services/products.service.js";

const handleError = (message) => ({
  error: true,
  message,
});

export const getAllProductsController = async () => await getAllProductsAction();

export const getProductByIdController = async (id = "") => {
  // Validacion
  if (isNaN(id)) return handleError("El id debe ser un valor numerico");

  if (id < 1) return handleError("El id debe ser un valor entero positivo");

  return await getProductByIdAction(id);
};

export const addProductController = async (body) => {
  if (body) {
    // Validacion
    const [title, price, category] = body;

    if (!title || !price || !category)
      return handleError("Datos del producto insuficiente");

    if (isNaN(price))
      return handleError("El precio debe ser un valor numerico");

    return await addProductAction({
      title,
      price: Number(price),
      category,
    });
  }
};

export const deleteProductController = async (id = "") => {
  // Validacion
  if (isNaN(id)) return handleError("El id debe ser un valor numerico");

  if (id < 1) return handleError("El id debe ser un valor entero positivo");

  return await deleteProductAction(id);
};
