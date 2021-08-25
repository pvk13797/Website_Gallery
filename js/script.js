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

function openModel() {
    document.getElementsByClassName("box")[0].style.display = "block";
}

function clickClose() {
    document.getElementsByClassName("box")[0].style.display = "none";
}

const slides = document.getElementsByClassName("mySlides"),
    nextBtn = document.getElementById("next"),
    prevBtn = document.getElementById("prev");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    var newIndex = (slideIndex += n);
    showDisabled(newIndex);
    showSlides(newIndex);
}

function currentSlide(n) {
    var newIndex = (slideIndex = n);
    showDisabled(newIndex);
    showSlides(newIndex);
}

function showSlides(n) {
    var i;

    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

function showDisabled(newIndex) {
    prevBtn.disabled = false;
    nextBtn.disabled = false;

    if(newIndex === slides.length) {
        nextBtn.disabled = true;
    } else if(newIndex === 1) {
        prevBtn.disabled = true;
    }
}