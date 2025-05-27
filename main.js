let menu = document.querySelector(".menu")
let close = document.querySelector(".close")
let menuSidebar = document.querySelector(".menu-sidebar")
let menuOverview = document.querySelector(".menu-overview")

menu.addEventListener("click", () => {
    menuSidebar.classList.add("menu-active")
    menuOverview.style.display = "block"
})

menuOverview.addEventListener("click", (event) => {
    // console.log(event.target.classList)
    if (event.target.classList == 'menu-overview') {
        menuOverview.style.display = 'none';
    }
})
close.addEventListener("click", () => {
    menuOverview.style.display = 'none';
})


let profile = document.querySelector(".profile")
let profileClose = document.querySelector(".profile-close")
let profileS = document.querySelector(".profile-active")
let profileOverview = document.querySelector(".profile-overview")


profile.addEventListener("click", () => {
    profileS.classList.add("sidebar-active")
    profileOverview.style.display = "block"
})

profileOverview.addEventListener("click", (event) => {
    console.log(event.target.classList)
    if (event.target.classList == 'profile-overview' || event.target.classList == 'profile-close') {
        profileOverview.style.display = 'none';
    }
})

profileClose.addEventListener("click", () => {
    profileOverview.style.display = 'none';
})

// conversation

let conversation = document.querySelector(".conversation")
let create = document.querySelector(".create-new")

create.addEventListener("click", () => {
    conversation.classList.toggle("opacity")
})

// smile

let smile = document.querySelector(".smile")
let status = document.querySelector(".status")

smile.addEventListener("mouseenter", () => {
    status.style.opacity="1"
})
smile.addEventListener("mouseleave", () => {
    status.style.opacity="0"
})

