import ProductModel from "../models/product.model.js";

// Requerimiento #6: Servicios
export class ProductService {
  static getAllProducts = () => {
    return ProductModel.findAll();
  };

  static createProduct = (productData) => {
    return ProductModel.create(productData);
  };

  static getProductById = (id) => {
    return ProductModel.findById(id);
  };

  static deleteProduct = (id) => {
    return ProductModel.delete(id);
  };
}
