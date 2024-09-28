const cart = JSON.parse(localStorage.getItem('cart')) || {};

function addToCart(entry) {
  // entry schema: name, size, price
  const sku = `${entry.name}-${entry.size}`
  if (!cart[sku]) {
    cart[sku] = { quantity: 0 };
  }
  cart[sku].price = entry.price;
  cart[sku].name = entry.name;
  cart[sku].size = entry.size;
  cart[sku].quantity++;
  saveCart();
  if (confirm('Added to cart. Do you want to go to cart?')){
    window.location.replace('/cart');
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
