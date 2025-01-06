const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'T-SHIRT', price: 5.0 },
  { id: 2, name: 'LADIES BAG', price: 9.0 },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
<script>
  // Fetch products from the backend
  fetch('/api/products')
    .then(response => response.json())
    .then(products => {
      const productContainer = document.querySelector('.small-container .row');
      
      // Clear existing products
      productContainer.innerHTML = '';

      // Add products dynamically
      products.forEach(product => {
        const productHTML = `
          <div class="col-4">
            <img src="images/${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>$${product.price.toFixed(2)}</p>
          </div>
        `;
        productContainer.innerHTML += productHTML;
      });
    })
    .catch(error => console.error('Error fetching products:', error));
</script>
