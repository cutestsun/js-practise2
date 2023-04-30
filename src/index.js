import "./styles/normalize.css";
import "./styles/index.css";
import { getProducts } from "./requests/products";
import refs from "./refs";
import { createProductListMarkup } from "./services/markupService";

async function renderProducts() {
  const response = await getProducts();
  const markup = createProductListMarkup(response);
  refs.productsList.innerHTML = markup;
}
// renderProducts();
