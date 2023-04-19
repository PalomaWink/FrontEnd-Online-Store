export async function getCategories() {
  const resAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resultJSON = await resAPI.json();
  return resultJSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const resAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const resultJSON = await resAPI.json();
  return resultJSON;
}

export async function getProductsByQuery(query) {
  const resAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const resultJSON = await resAPI.json();
  return resultJSON;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
