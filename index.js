'use script';

const toogle = document.querySelector(".toogle");
const toogleImg = document.querySelector(".toogle-img");
const  menu = document.querySelector(".nav-links");
let closeButton = false;

toogle.addEventListener("click", function(){
    menu.classList.toggle("active");
    if (!closeButton){
        toogleImg.setAttribute("src", "assets/icons/icons8-close-50.png");
        closeButton = true;
    }
    else{
        toogleImg.setAttribute("src", "assets/icons/icons8-menu-50.png");
        closeButton = false;

    }
})