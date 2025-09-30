const BASE_URL = "https://fakestoreapi.com";

export const getAllProductsAction = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();

    return {
      data,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};
