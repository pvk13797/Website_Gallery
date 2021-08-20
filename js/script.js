const toggleMenu = document.getElementsByClassName('menu_bar')[0],
    headerMenu = document.getElementsByClassName('top_nav')[0],
    closeMenu = document.getElementsByClassName('content_area')[0];

    toggleMenu.addEventListener("click", () => {
        toggleMenu.classList.toggle("active");
        headerMenu.classList.toggle("active");
    });

    closeMenu.addEventListener("click", () => {
        if(toggleMenu.classList.toggle("active") !== "active" && headerMenu.classList.toggle("active") !== "active") {
            toggleMenu.classList.remove("active");
            headerMenu.classList.remove("active");
        }
    });