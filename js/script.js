function toggleMenu() {
    
    const headerMenu = document.getElementsByClassName('top_nav')[0];

    if(headerMenu.style.display === 'none') {
        headerMenu.style.display = 'block';
    } else {
        headerMenu.style.display = 'none';
    }

}

