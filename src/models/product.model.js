import { db } from "../data/data.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

// Requerimiento #6: Acceso a los datos
class ProductModel {
  // Metodo: Crear producto
  static create = async (product) => {
    const productRef = await addDoc(productsCollection, product);
    return productRef.id;
  };

  // Metodo: Todos los productos
  static findAll = async () => {
    const querySnapshot = await getDocs(productsCollection);
    let products = [];

    querySnapshot.forEach(
      (doc) =>
        (products = [
          ...products,
          {
            id: doc.id,
            ...doc.data(),
          },
        ])
    );

    return products;
  };

  // Metodo: Obtener por ID
  static findById = async (id) => {
    const productDoc = await getDoc(doc(productsCollection, id));

    return productDoc.exists() ? productDoc.data() : null;
  };

  // Metodo: Eliminar por ID
  static delete = async (id) => {
    await deleteDoc(doc(productsCollection, id));
  };
}

export default ProductModel;
