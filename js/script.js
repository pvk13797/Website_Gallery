const toggleMenu = document.getElementsByClassName('menu_bar')[0],
    headerMenu = document.getElementsByClassName('top_nav')[0];

    toggleMenu.addEventListener("click", () => {
        toggleMenu.classList.toggle("active");
        headerMenu.classList.toggle("active");
    })


