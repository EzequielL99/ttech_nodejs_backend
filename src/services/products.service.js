const BASE_URL = "https://fakestoreapi.com";

export const getAllProductsAction = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    
    // Validacion
    if(response.status !== 200) throw new Error('Error al consumir el servicio de Fake Store API para consultar todos los productos');

    const data = await response.json();

    return data;
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};

export const getProductByIdAction = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    // Validacion
    if(response.status !== 200) throw new Error('Error al consumir el servicio de Fake Store API para consultar el detalle de un producto');

    const data = await response.json();

    return data;
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};

export const addProductAction = async (newProductData) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductData),
    });

    // Validacion
    if(response.status !== 201) throw new Error('Error al consumir el servicio de Fake Store API para agregar un nuevo producto');

    const data = await response.json();

    return data;
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};

export const deleteProductAction = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    // Validacion
    if(response.status !== 200) throw new Error('Error al consumir el servicio de Fake Store API para eliminar un producto');

    const data = await response.json();

    return data;
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};
