import "./styles/normalize.css";
import "./styles/index.css";
import { getProducts, getSingleProduct, addProduct } from "./requests/products";
import refs from "./refs";
import {
  createProductListMarkup,
  createSingleProductMarkup,
} from "./services/markupService";

async function renderProducts() {
  const response = await getProducts();
  const markup = createProductListMarkup(response);
  refs.productsList.innerHTML = markup;
}
// renderProducts();
refs.singleProductForm.addEventListener("submit", onFormSubmit);
async function onFormSubmit(evt) {
  evt.preventDefault();

  const id = evt.currentTarget.elements.id.value.trim();
  if (!id) {
    return;
  }
  const product = await getSingleProduct(id);
  if (!product) {
    return;
  }
  const markup = createSingleProductMarkup(product);
  refs.singleProduct.innerHTML = markup;
}

refs.addProductForm.addEventListener("submit", onAddProductFormSubmit);

async function onAddProductFormSubmit(e) {
  e.preventDefault();

  const { title, description, price } = e.currentTarget.elements;

  const product = {
    title: title.value,
    description: description.value,
    price: price.value,
  };

  const response = await addProduct(product);
  const markup = createSingleProductMarkup(response);
  refs.newProductSection.innerHTML = markup;
}
