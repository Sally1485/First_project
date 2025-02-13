const MENU = document.querySelector(".menu");
const CLOSE = document.querySelector(".close-btn");
const MOBILETOGGLE = document.querySelector(".mobile");

MENU.addEventListener("click", ()=> {
    MOBILETOGGLE.classList.add("view")
})

CLOSE.addEventListener("click", ()=> {
    MOBILETOGGLE.classList.remove("view")
})