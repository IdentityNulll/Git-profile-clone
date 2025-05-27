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



// search for users

function handleEnter(event) {
  if (event.key === "Enter") {
    const userName = event.target.value.trim();
    if (!userName) return;

    const url = `https://api.github.com/search/users?q=${userName}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const users = data.items;
        if (!users.length) {
          alert("No users found.");
          return;
        }

        const newTab = window.open();
        newTab.document.write(`<h1>Search Results for "${userName}"</h1>`);
        users.forEach(user => {
          newTab.document.write(`
            <div style="margin-bottom: 10px;">
              <img src="${user.avatar_url}" width="50" height="50" />
              <a href="${user.html_url}" target="_blank">${user.login}</a>
            </div>
          `);
        });
        newTab.document.close();
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Something went wrong.");
      });
  }
}
