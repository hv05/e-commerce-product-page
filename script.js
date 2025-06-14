function increaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  let current = parseInt(quantityInput.value);
  quantityInput.value = current + 1;
}

function decreaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  let current = parseInt(quantityInput.value);
  if (current > 1) {
    quantityInput.value = current - 1;
  }
}

function addToCart() {
  const quantity = document.getElementById('quantity').value;
  const color = document.getElementById('color').value;
  const size = document.getElementById('size').value;

  alert(`Added ${quantity} item(s) - Color: ${color}, Size: ${size} to your cart!`);
}
