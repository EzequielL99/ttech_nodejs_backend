import { ProductService } from "../services/product.service.js";

// Requerimiento #5: Controladores
export class ProductController {
  static getAllProducts = async (req, res) => {
    try {
      const products = await ProductService.getAllProducts();

      return res.status(200).json({
        data: products,
      });
    } catch (error) {
      // DEBUG
      console.log(error);
    }
  };

  static createProduct = async (req, res) => {
    try {
      const { category, description, name, price, slugId, stock } = req.body;

      const newProduct = await ProductService.createProduct({
        category,
        description,
        name,
        price,
        slugId,
        stock,
      });

      return res.status(201).json({
        data: newProduct,
      });
    } catch (error) {
      console.log(error);
    }
  };

  static getProductById = async (req, res) => {
    try {
      const id = req.params.id;

      const product = await ProductService.getProductById(id);

      if (!product) {
        return res.status(404).json({
          error: "Producto no encontrado",
        });
      }

      return res.json({
        data: product,
      });
    } catch (error) {
      // DEBUG
      console.log(error);
    }
  };

  static deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;

      await ProductService.deleteProduct(id);

      res.send("Producto eliminado correctamente");
    } catch (error) {
      console.log(error);
    }
  };
}
