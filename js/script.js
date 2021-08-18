function toggleMenu() {
    
    const toggleMenu = document.getElementsByClassName('menu_bar')[0];
    const headerMenu = document.getElementsByClassName('top_nav')[0];

    toggleMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');

}

