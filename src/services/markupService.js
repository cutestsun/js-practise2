export function createProductListMarkup(arr) {
  console.log(arr);
  return arr
    .map(
      ({ title, description, price }) => `<li>
  <h2>${title}</h2>
  <p>${description}</p>
  <p>${price}</p>
</li>`
    )
    .join("");
}

export function createSingleProductMarkup({title,description,price}) {

  return `<h2>${title}</h2>
      <p>${description}</p>
      <p>${price}</p>`
  
}