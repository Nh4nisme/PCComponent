fetch('../json/products.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        const displayedProducts = data.slice(0, 12);

        for (let i = 0; i < displayedProducts.length; i += 6) {
            const row = document.createElement('div');
            row.className = 'row g-3';

            displayedProducts.slice(i, i + 6).forEach(product => {
                const productCard = `
                    <div class="col-12 col-md-4 col-lg-2">
                        <div class="card h-100 text-left p-3 border shadow-sm">
                            <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}" style="height: 150px; object-fit: cover;">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <p class="card-text">${product.name}</p>
                                <span class="fw-bold text-danger">${product.price}</span>
                            </div>
                        </div>
                    </div>
                `;
                row.innerHTML += productCard;
            });

            productList.appendChild(row);
        }
    })
    .catch(error => console.error('Error loading products:', error));