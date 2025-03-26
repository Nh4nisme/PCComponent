$(document).ready(function () {
    const data = {
        laptop: `
                        <div class="row flex-wrap p-3">
                            <div class="col-3">
                                <span class="filter-title">Brand</span>
                                <ul class="list-unstyled d-flex flex-column gap-2">
                                    <li class="mt-2"><a href="#Acer">Acer</a></li>
                                    <li><a href="#Asus">Asus</a></li>
                                    <li><a href="#Dell">Dell</a></li>
                                    <li><a href="#HP">HP</a></li>
                                    <li><a href="#Lenovo">Lenovo</a></li>
                                    <li><a href="#MSI">MSI</a></li>
                                    <li><a href="#GIGABYTE">GIGABYTE</a></li>
                                    <li><a href="#LGGram">LG Gram</a></li>
                                </ul>                                        
                            </div>
                            <div class="col-3">
                                <span class="filter-title">Price Range</span>
                                <ul class="list-unstyled d-flex flex-column gap-2">
                                    <li class="mt-2"><a href="#">Under $500</a></li>
                                    <li><a href="#">$500 - $1000</a></li>
                                    <li><a href="#">$1000 - $2000</a></li>
                                    <li><a href="#">Above $2000</a></li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <span class="filter-title">Usage</span>
                                <ul class="list-unstyled d-flex flex-column gap-2">
                                    <li class="mt-2"><a href="#">Gaming</a></li>
                                    <li><a href="#">Workstation</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Student</a></li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <span class="filter-title">Features</span>
                                <ul class="list-unstyled d-flex flex-column gap-2">
                                    <li class="mt-2"><a href="#">Touchscreen</a></li>
                                    <li><a href="#">2-in-1 Convertible</a></li>
                                    <li><a href="#">High Refresh Rate</a></li>
                                </ul>
                            </div>
                        </div>
        `,
        pc: `
                    <div class="row flex-wrap p-3" data-content="pc">
                        <div class="col-3">
                            <span class="filter-title">Brand</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#Acer">Acer</a></li>
                                <li><a href="#Asus">Asus</a></li>
                                <li><a href="#Dell">Dell</a></li>
                                <li><a href="#HP">HP</a></li>
                                <li><a href="#Lenovo">Lenovo</a></li>
                                <li><a href="#MSI">MSI</a></li>
                            </ul>                                        
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Form Factor</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Mini PC</a></li>
                                <li><a href="#">Tower</a></li>
                                <li><a href="#">All-in-One</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Usage</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Gaming</a></li>
                                <li><a href="#">Workstation</a></li>
                                <li><a href="#">Office</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Features</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">RGB Lighting</a></li>
                                <li><a href="#">Liquid Cooling</a></li>
                                <li><a href="#">Overclockable</a></li>
                            </ul>
                        </div>
                    </div>
        `,
        monitor: `
                    <div class="row flex-wrap p-3" data-content="monitor">
                        <div class="col-3">
                            <span class="filter-title">Brand</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#LG">LG</a></li>
                                <li><a href="#Samsung">Samsung</a></li>
                                <li><a href="#Asus">Asus</a></li>
                                <li><a href="#Dell">Dell</a></li>
                            </ul>                                        
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Screen Size</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Under 24"</a></li>
                                <li><a href="#">24" - 27"</a></li>
                                <li><a href="#">Above 27"</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Resolution</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">1080p</a></li>
                                <li><a href="#">1440p</a></li>
                                <li><a href="#">4K</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Refresh Rate</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">60Hz</a></li>
                                <li><a href="#">120Hz</a></li>
                                <li><a href="#">144Hz+</a></li>
                            </ul>
                        </div>
                    </div>
        `,
        component:`
                    <div class="row flex-wrap p-3" data-content="component">
                        <div class="col-3">
                            <span class="filter-title">Brand</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Intel</a></li>
                                <li><a href="#">AMD</a></li>
                                <li><a href="#">NVIDIA</a></li>
                                <li><a href="#">ASUS</a></li>
                                <li><a href="#">MSI</a></li>
                                <li><a href="#">GIGABYTE</a></li>
                                <li><a href="#">Corsair</a></li>
                                <li><a href="#">Kingston</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Category</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">CPUs</a></li>
                                <li><a href="#">GPUs</a></li>
                                <li><a href="#">Motherboards</a></li>
                                <li><a href="#">RAM</a></li>
                                <li><a href="#">Storage</a></li>
                                <li><a href="#">Power Supply</a></li>
                                <li><a href="#">Cooling System</a></li>
                                <li><a href="#">Case</a></li>
                            </ul>                                        
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Specifications</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">DDR4</a></li>
                                <li><a href="#">DDR5</a></li>
                                <li><a href="#">PCIe 4.0</a></li>
                                <li><a href="#">PCIe 5.0</a></li>
                                <li><a href="#">M.2 NVMe</a></li>
                                <li><a href="#">SATA SSD</a></li>
                                <li><a href="#">HDD</a></li>
                                <li><a href="#">80+ Gold PSU</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Features</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">RGB Lighting</a></li>
                                <li><a href="#">Water Cooling</a></li>
                                <li><a href="#">Overclocking Support</a></li>
                                <li><a href="#">Compact Form Factor</a></li>
                            </ul>
                        </div>
                    </div>
        `,
        gear:`
                    <div class="row flex-wrap p-3">
                        <div class="col-3">
                            <span class="filter-title">Brand</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#Razer">Razer</a></li>
                                <li><a href="#LogitechG">Logitech G</a></li>
                                <li><a href="#SteelSeries">SteelSeries</a></li>
                                <li><a href="#Corsair">Corsair</a></li>
                                <li><a href="#HyperX">HyperX</a></li>
                                <li><a href="#ASUSROG">ASUS ROG</a></li>
                            </ul>                                        
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Price Range</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Under $50</a></li>
                                <li><a href="#">$50 - $150</a></li>
                                <li><a href="#">$150 - $300</a></li>
                                <li><a href="#">Above $300</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Type</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Gaming Mouse</a></li>
                                <li><a href="#">Mechanical Keyboard</a></li>
                                <li><a href="#">Gaming Headset</a></li>
                                <li><a href="#">Mousepad</a></li>
                                <li><a href="#">Gaming Chair</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <span class="filter-title">Features</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">RGB Lighting</a></li>
                                <li><a href="#">Wireless</a></li>
                                <li><a href="#">Ultra Lightweight</a></li>
                                <li><a href="#">Customizable Keys</a></li>
                            </ul>
                        </div>
                    </div>
        `,
        accessories:`
                    <div class="row flex-wrap p-3">
                        <div class="col-4">
                            <span class="filter-title">Category</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Laptop Bags</a></li>
                                <li><a href="#">Cooling Pads</a></li>
                                <li><a href="#">USB Hubs</a></li>
                                <li><a href="#">Cables & Adapters</a></li>
                                <li><a href="#">External Storage</a></li>
                            </ul>                                        
                        </div>
                        <div class="col-4">
                            <span class="filter-title">Brand</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Targus</a></li>
                                <li><a href="#">UGREEN</a></li>
                                <li><a href="#">Anker</a></li>
                                <li><a href="#">Baseus</a></li>
                                <li><a href="#">Orico</a></li>
                            </ul>
                        </div>
                        <div class="col-4">
                            <span class="filter-title">Compatibility</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">USB-C Devices</a></li>
                                <li><a href="#">MacBook</a></li>
                                <li><a href="#">Windows Laptops</a></li>
                                <li><a href="#">Tablets</a></li>
                            </ul>
                        </div>
                    </div>
        `,
        audio:`
                    <div class="row flex-wrap p-3">
                        <div class="col-4">
                            <span class="filter-title">Brand</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Sony</a></li>
                                <li><a href="#">Bose</a></li>
                                <li><a href="#">JBL</a></li>
                                <li><a href="#">Sennheiser</a></li>
                                <li><a href="#">Apple</a></li
                            </ul>                                        
                        </div>
                        <div class="col-4">
                            <span class="filter-title">Type</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Over-Ear Headphones</a></li>
                                <li><a href="#">Wireless Earbuds</a></li>
                                <li><a href="#">Noise Cancelling</a></li>
                                <li><a href="#">Gaming Headset</a></li>
                                <li><a href="#">Bluetooth Speakers</a></li>
                            </ul>
                        </div>
                        <div class="col-4">
                            <span class="filter-title">Features</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Active Noise Cancellation</a></li>
                                <li><a href="#">High-Resolution Audio</a></li>
                                <li><a href="#">Long Battery Life</a></li>
                            </ul>
                        </div>
                    </div>
        `,
        office:`
                    <div class="row flex-wrap p-3">
                        <div class="col-4">
                            <span class="filter-title">Brand</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">HP</a></li>
                                <li><a href="#">Canon</a></li>
                                <li><a href="#">Epson</a></li>
                                <li><a href="#">Brother</a></li>
                                <li><a href="#">Fujitsu</a></li
                            </ul>
                        </div>
                        <div class="col-4">
                            <span class="filter-title">Category</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Printers</a></li>
                                <li><a href="#">Scanners</a></li>
                                <li><a href="#">Shredders</a></li>
                                <li><a href="#">Projectors</a></li>
                                <li><a href="#">Office Chairs</a></li>
                            </ul>                                        
                        </div>
                        <div class="col-4">
                            <span class="filter-title">Usage</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Home Office</a></li>
                                <li><a href="#">Corporate</a></li>
                                <li><a href="#">Small Business</a></li>
                            </ul>
                        </div>
                    </div>
        `,
        business:`
                    <div class="row flex-wrap p-3">
                        <div class="col-6">
                            <span class="filter-title">Category</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Cloud Storage</a></li>
                                <li><a href="#">VPN Services</a></li>
                                <li><a href="#">Software Licensing</a></li>
                                <li><a href="#">Networking Equipment</a></li>
                            </ul>                                        
                        </div>
                        <div class="col-6">
                            <span class="filter-title">Providers</span>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li class="mt-2"><a href="#">Microsoft</a></li>
                                <li><a href="#">Google</a></li>
                                <li><a href="#">Cisco</a></li>
                                <li><a href="#">IBM</a></li>
                            </ul>
                        </div>
                    </div>
        `
    };

    let isInsideMenu = false; //ktra mouse enter

    $(".menu-item").mouseenter(function () { 
        let key = $(this).data("content");
        $("#submenu-content").html(data[key]);
        $(".submenu-container").fadeIn(200);
        $(".main-header-img").hide();
    });

    $(".sidebar-menu, .submenu-container").mouseenter(function () {
        isInsideMenu = true;
    });

    $(".sidebar-menu, .submenu-container").mouseleave(function () {
        isInsideMenu = false;
        setTimeout(function () {
            if (!isInsideMenu) {
                $(".submenu-container").hide();
                $(".main-header-img").show();
            }
        }, 200);
    });
});


// js cho phần search 
document.addEventListener('DOMContentLoaded', function() {
    const placeholderElement = document.querySelector('.placeholder-text');
    const searchInput = document.querySelector('.search-input');
    const searchToggle = document.querySelector('.search-toggle');
    const searchContainer = document.querySelector('.search-container');
    
    if (searchToggle) {
      searchToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
          setTimeout(() => searchInput.focus(), 300); 
        }
      });
    }
    
    document.addEventListener('click', function(event) {
      const isClickInside = searchContainer.contains(event.target) || searchToggle.contains(event.target);
      if (!isClickInside && searchContainer.classList.contains('active')) {
        searchContainer.classList.remove('active');
      }
    });
    
    searchContainer.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    const phrases = [
      'gaming laptop',
      'pc',
      'lenovo legion',
      '4k screen',
      'msi laptop',
      'rtx 5080'
    ];
    
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = '';
    let isDeleting = false;
    let typingSpeed = 150;
    let typingInterval = null;
    
    function typeEffect() {
      const fullPhrase = phrases[phraseIndex];
      
      // If deleting
      if (isDeleting) {
        currentPhrase = fullPhrase.substring(0, letterIndex - 1);
        letterIndex--;
        typingSpeed = 75;
      } else {
        // If typing
        currentPhrase = fullPhrase.substring(0, letterIndex + 1);
        letterIndex++;
        typingSpeed = 150; 
      }
      
      placeholderElement.textContent = currentPhrase;
      if (!isDeleting && letterIndex === fullPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; 
      } 
      else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; 
        typingSpeed = 500; 
      }
      
      typingInterval = setTimeout(typeEffect, typingSpeed);
    }
    
    setTimeout(typeEffect, 1000);
    searchInput.addEventListener('focus', function() {
      placeholderElement.style.display = 'none'; // If the useris typing, hide the placeholder text
    });
    
    searchInput.addEventListener('blur', function() {
      if (searchInput.value === '') {
        placeholderElement.style.display = 'block'; // Show again if input is empty
      }
    });
  });

// js chung cho tabpanel và hiển thị các offer
document.addEventListener('DOMContentLoaded', function () {
    readJson('pc', 'bot-category-offer');
    readJson('monitor', 'bot-category-offer-monitors');

    let firstTab = document.querySelector('.tab-btn');  
    if (firstTab) {
        firstTab.click();
    }
});

function openTab(event, tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');

    fetchDataToTab(tabId);
}

function fetchDataToTab(tabId) {
    console.log("Loading data for tab:", tabId);
    $.getJSON('../json/products.json', function (data) {
        if (!data.laptop) {
            console.error('Không tìm thấy danh mục laptop trong JSON!');
            return;
        }

        let categoryMap = {
            'GAMING': data.laptop.gaming,
            'AI': data.laptop.ai,
            'OFFICE': data.laptop.office,
            'STUDENT': data.laptop.student,
            'GRAPHICS': data.laptop.graphics
        };

        let products = categoryMap[tabId] || [];
        let container = $(`#${tabId} .products-tab-content`);

        if (container.length) {
            container.empty();

            let index = 0;
            function updateProducts() {
                let currentProducts = products.slice(index, index + 5);
                container.html(currentProducts.map(createHTML).join(''));

                container.find('.product').hide().fadeIn(1000);

                index = (index + 5) % products.length;
            }

            updateProducts();
            setInterval(updateProducts, 7000);
        } else {
            console.error(`Không tìm thấy phần tử #${tabId} .products-tab-content`);
        }
    }).fail(error => console.error('Lỗi đọc file:', error));
}

function readJson(category, containerId) {
    fetch('../json/products.json')
        .then(response => response.json())
        .then(data => {
            if (!data[category]) {
                console.error(`Danh mục ${category} không tồn tại trong JSON!`);
                return;
            }

            let container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = data[category].slice(0, 5).map(createHTML).join('');
            } else {
                console.error(`Không tìm thấy phần tử ${containerId}!`);
            }
        })
        .catch(error => console.error('Lỗi khi đọc JSON:', error));
}

function createHTML(product) {
    return `
                                <div class="product col">
                                    <div class="card products-tab-content-card shadow h-100 border-0 rounded-4">
                                        <img src="${product.img}" class="card-img-top p-2" alt="${product.description}">
                                        <div class="card-body d-flex flex-column justify-content-between" style="font-size: 14px;">
                                            <div class="mb-5">
                                                <h6 class="card-title fw-bold mb-0">${product.title}</h6>
                                                <p class="card-text mb-0">${product.description}</p>
                                                <div class="">
                                                    <span class="fw-semibold">${product.price}</span>
                                                    <del class="text-secondary fw-normal">${product.oldPrice}</del>
                                                </div>
                                                <div class="products-card-details d-flex flex-column rounded-4 p-2" style="font-size: 11px;">
                                                    <div class="cpu d-flex gap-2">
                                                        <img src="../icons/products-card-details/badge.svg" alt="cpu">
                                                        <span>${product.cpu}</span>
                                                    </div>
                                                    <div class="gpu d-flex gap-2">
                                                        <img src="../icons/products-card-details/gpu.svg" alt="gpu">
                                                        <span>${product.gpu}</span>
                                                    </div>
                                                    <div class="ram-ssd d-flex gap-2">
                                                        <img src="../icons/products-card-details/ram.svg" alt="ram">
                                                        <span>${product.ram}</span>
                                                        <img src="../icons/products-card-details/ssd.svg" alt="ssd">
                                                        <span>${product.ssd}</span>
                                                    </div>
                                                    <div class="screensize d-flex gap-2">
                                                        <img src="../icons/products-card-details/screensize.svg" alt="screensize">
                                                        <span>${product.screen}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="btn rounded-3 d-flex align-items-center end-0">
                                                <span class="mx-auto">Add To Basket</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
    `;
}