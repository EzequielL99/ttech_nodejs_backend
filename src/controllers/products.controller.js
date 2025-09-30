import { getAllProductsAction } from "../services/products.service.js";

export const getAllProductsController = async () => {
  const products = await getAllProductsAction();

  return products;
};

export const getProductByIdController = async (id = '') => {
    // Validacion
    if(isNaN(id)) return {
        error: true,
        message: 'El id debe ser un valor numerico'
    }

    if(id < 1) return {
        error: true,
        message: 'El id debe ser un valor entero positivo'
    }




}
