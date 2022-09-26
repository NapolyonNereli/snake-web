const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const removeMenu = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
})

removeMenu.forEach(e => {
    e.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
});