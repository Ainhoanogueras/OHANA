/* CABEZERA: MENU + MENU HAMBURGESA 
    -Activamos el menu hamburgesa cuando la pantalla baje de pixeles, con esto conseguimos 
    que el menu se adapte a diferentes tamaños de pantallas
*/


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))