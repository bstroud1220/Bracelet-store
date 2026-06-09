// Product data
const products = [
  {
    id: 1,
    name: 'Pastel Beaded Bracelet',
    price: 15,
    image: 'https://images.unsplash.com/photo-1611599537845-1c4b8f5b7d9c?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Charm Bracelet',
    price: 20,
    image: 'https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Soft Leather Bracelet',
    price: 18,
    image: 'https://images.unsplash.com/photo-1603570419986-6cadb3c8b8b5?w=400&h=400&fit=crop'
  }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  loadProducts();
});

// Load products to the page
function loadProducts() {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="btn" onclick="addToCart(${product.id})">Buy</button>
    `;
    productList.appendChild(productDiv);
  });
}

// Add to cart functionality
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    alert(`Added "${product.name}" to cart!`);
    // You can expand this to maintain a shopping cart
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});