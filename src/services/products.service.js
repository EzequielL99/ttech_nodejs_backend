const BASE_URL = "https://fakestoreapi.com";

export const getAllProductsAction = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
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
    const data = await response.json();

    return data;
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};
