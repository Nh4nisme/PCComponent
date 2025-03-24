document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const slide = document.getElementById("slide");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let autoSlide = setInterval(() => nextSlide(), 3000); 

    function nextSlide() {
        let lists = document.querySelectorAll(".quancao .item");
        if (lists.length > 1) {
            slide.appendChild(lists[0]);
        }
    }

    function prevSlide() {
        let lists = document.querySelectorAll(".quancao .item");
        if (lists.length > 1) {
            slide.prepend(lists[lists.length - 1]);
        }
    }

    function resetAutoSlide() {
        clearInterval(autoSlide); 
        autoSlide = setInterval(() => nextSlide(), 3000);
    }

    if (nextBtn && prevBtn && slide) {
        nextBtn.onclick = function () {
            nextSlide();
            resetAutoSlide();
        };

        prevBtn.onclick = function () {
            prevSlide();
            resetAutoSlide();
        };
    }

    // Load danh sách sản phẩm
    fetch("../json/products.json")
        .then(response => response.json())
        .then(data => {
            if (!productList) return;
            productList.innerHTML = "";

            const row = document.createElement("div");
            row.className = "d-flex flex-wrap gap-3";

            data.slice(0, 10).forEach((product) => {
                const productItem = document.createElement("div");
                productItem.className = "product-item";

                productItem.innerHTML = `
                    <div class="card h-100 d-flex flex-column justify-content-between text-left p-2 border shadow-sm">
                        <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                        <div class="card-body d-flex flex-column justify-content-between p-0">
                            <p class="card-text">${product.name}</p>
                            <div class="shopping w-100 d-inline-flex justify-content-between">
                                <span class="fw-bold text-danger">${product.price}</span>
                                <i class="fa-solid fa-cart-shopping d-flex justify-content-between align-items-center p-1 rounded-1 text-white bg-danger"></i>
                            </div>
                        </div>
                    </div>
                `;

                row.appendChild(productItem);
            });

            productList.appendChild(row);
        })
        .catch((error) => console.error("Error loading products:", error));

    // Load quảng cáo
    fetch("../json/products.json")
        .then(response => response.json())
        .then(data => {
            if (!slide) return;
            slide.innerHTML = "";

            data.slice(0, 5).forEach((product) => {
                const itemDiv = document.createElement("div");
                itemDiv.className = "item bg-center d-inline-block position-absolute z-1 rounded-4 shadow-lg bg-light";
                itemDiv.style.backgroundImage = `url(${product.image})`;

                itemDiv.innerHTML = `
                    <div class="content text-left position-absolute">
                        <div class="name fw-bold">${product.name}</div>
                        <div class="des fw-bold text-danger">${product.price}</div>
                    </div>
                `;

                slide.appendChild(itemDiv);
            });
        })
        .catch((error) => console.error("Error loading products:", error));
});
