import { instance } from "../services/api";

async function getProducts() {
  try {
    const response = await instance.get("/products");

    return response.data.products;
  } catch (error) {
    console.error(error);
  }
}

async function getSingleProduct(id) {
  try {
    const response = await instance.get(`/products/${id}`)
    return response.data;
  } catch (error) {
     console.error(error);
  }
}


export { getProducts, getSingleProduct };