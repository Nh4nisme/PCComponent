document.addEventListener("DOMContentLoaded", function () {
    let laptopMenu = document.getElementById("laptop-menu");
    let sidebarExpand = document.getElementById("sidebar-expand");

    laptopMenu.addEventListener("mouseenter", function () {
        sidebarExpand.style.display = "block";
    });

    laptopMenu.addEventListener("mouseleave", function () {
        setTimeout(function () {
            if (!sidebarExpand.matches(":hover")) {
                sidebarExpand.style.display = "none";
            }
        }, 200);
    });

    sidebarExpand.addEventListener("mouseleave", function () {
        sidebarExpand.style.display = "none";
    });
});
