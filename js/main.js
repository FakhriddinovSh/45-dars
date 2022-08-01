var elHeader = document.querySelector(".site-header__inner")
var elHamburger = document.querySelector(".site-header__menu-btn")

elHamburger.addEventListener("click", function(){
    elHeader.classList.toggle("site-header__inner--active")
})

let elModal = document.querySelector(".modal")
let elBtn = document.querySelector(".drink__btn")
let elClose = document.querySelector(".modal__btn")
let elCloseMobile = document.querySelector("#modal-close")
let elHeroBtn = document.querySelector(".hero__btn")

elBtn.addEventListener("click", function(){
    elModal.classList.add("modal--active")
})

elClose.addEventListener("click", function(){
    elModal.classList.remove("modal--active")
})

elCloseMobile.addEventListener("click", function(){
    elModal.classList.remove("modal--active")
})

elHeroBtn.addEventListener("click", function(){
    elModal.classList.add("modal--active")
})

