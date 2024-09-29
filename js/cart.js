const cart = JSON.parse(localStorage.getItem('cart')) || {};

window.addEventListener('DOMContentLoaded', function() {
   // wait to update cart otherwise cart-count element is not found
  setTotalCartQuantity(); 
});

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
  setTotalCartQuantity();
}

function setTotalCartQuantity(){
  const val = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').innerText = val > 0 ? val : '';
}
