let cart = 0;

function addToCart() {
  // BUG 4: cart is string concatenated instead of number sometimes
  cart = cart + 1;
  document.getElementById('cartCount').innerText = cart;
}

const form = document.getElementById('checkoutForm');

form.addEventListener('submit', function(e) {
  // BUG 5: preventDefault is missing
  showLoader();
  alert('Form submitted successfully');
});

function showLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';

  // BUG 6: Loader never hides
  setTimeout(() => {
    console.log('Loading...');
  }, 2000);
}

// BUG 7: Undefined variable used
console.log(totalPrice);
