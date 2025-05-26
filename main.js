let menu = document.querySelector(".menu")
let close = document.querySelector(".close")
let menuSidebar = document.querySelector(".menu-sidebar")

menu.addEventListener("click", ()=> {
    menuSidebar.classList.add("menu-active")
})

close.addEventListener("click", ()=> {
    menuSidebar.classList.remove("menu-active")
})