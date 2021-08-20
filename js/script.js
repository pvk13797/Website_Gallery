const toggleMenu = document.getElementsByClassName('menu_bar')[0],
    headerMenu = document.getElementsByClassName('top_nav')[0],
    closeMenu = document.getElementsByClassName('content_area')[0];

    toggleMenu.addEventListener("click", () => {
        toggleMenu.classList.toggle("active");
        headerMenu.classList.toggle("active");
    });

    closeMenu.addEventListener("click", () => {
        if(toggleMenu.classList.contains("active") && headerMenu.classList.contains("active")) {
            toggleMenu.classList.remove("active");
            headerMenu.classList.remove("active");
            console.log("Menu Close");
        }
        else {
            console.log("No Menus");
        }
    });