import { instance } from "../services/api";

async function getProducts() {
  try {
    const response = await instance.get("/products");

    return response.data.products;
  } catch (error) {
    console.error(error);
  }
}

export { getProducts };
