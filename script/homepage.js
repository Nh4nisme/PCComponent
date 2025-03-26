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

            data.laptop.gaming.slice(0, 10).forEach((product) => {
                const productItem = document.createElement("div");
                productItem.className = "product-item";

                productItem.innerHTML = `
                    <div class="card h-100 d-flex flex-column justify-content-between text-left p-2 border shadow-sm">
                        <img src="${product.img}" class="card-img-top img-fluid" alt="${product.description}">
                        <div class="card-body d-flex flex-column justify-content-between p-0">
                            <p class="card-text">${product.description}</p>
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

            data.laptop.gaming.slice(0, 5).forEach((product) => {
                const itemDiv = document.createElement("div");
                itemDiv.className = "item bg-center d-inline-block position-absolute z-1 rounded-4 shadow-lg bg-light";
                itemDiv.style.backgroundImage = `url(${product.img})`;

                itemDiv.innerHTML = `
                    <div class="content text-left position-absolute">
                        <div class="name fw-bold">${product.description}</div>
                        <div class="des fw-bold text-danger">${product.price}</div>
                    </div>
                `;

                slide.appendChild(itemDiv);
            });
        })
        .catch((error) => console.error("Error loading products:", error));

    // Load header phù hợp
    const headerPlaceholder1 = document.getElementById("header-placeholder");
    const headerPlaceholder2 = document.getElementById("header2-placeholder");

    if (headerPlaceholder1) {
        fetch("../html/header1.html")
            .then(response => response.text())
            .then(data => {
                headerPlaceholder1.innerHTML = data;
            })
            .catch(error => console.error("Error loading header1:", error));
    }

    if (headerPlaceholder2) {
        fetch("../html/header2.html")
            .then(response => response.text())
            .then(data => {
                headerPlaceholder2.innerHTML = data;
            })
            .catch(error => console.error("Error loading header2:", error));
    }


    fetch("../html/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
