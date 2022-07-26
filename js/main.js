var elHeader = document.querySelector(".site-header__inner")
var elHamburger = document.querySelector(".site-header__menu-btn")

elHamburger.addEventListener("click", function(){
    elHeader.classList.toggle("site-header__inner--active")
})