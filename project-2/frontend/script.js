async function fetchProducts() {
    try {
        const response = await fetch('http://127.0.0.1:5000/products');
        const products = await response.json();

        const container = document.getElementById("products");
        container.innerHTML = ''; // Clear existing products

        if (products.length === 0) {
            container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #999;">No products available</p>';
            return;
        }

        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "card";

            const imageUrl = product.image || 'https://via.placeholder.com/280x220?text=Product';
            const price = product.price || 'N/A';
            const description = product.description || 'High quality product';

            card.innerHTML = `
                <img src="${imageUrl}" alt="${product.name}" class="card-image" />
                <div class="card-content">
                    <h3 class="card-name">${product.name}</h3>
                    <p class="card-description">${description}</p>
                    <div class="card-footer">
                        <div class="card-price">₹${price}</div>
                        <button class="btn-add" onclick="addToCart('${product.name}', ${price})">Add to Cart</button>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching products:", error);
        const container = document.getElementById("products");
        container.innerHTML = '<p style="color: red; text-align: center;">Failed to load products. Please check the backend connection.</p>';
    }
}

function addToCart(productName, price) {
    alert(`Added "${productName}" (₹${price}) to cart!`);
    // TODO: Implement actual cart functionality
}

// Fetch products on page load
document.addEventListener('DOMContentLoaded', fetchProducts);
