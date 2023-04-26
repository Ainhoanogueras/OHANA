/* CABECERA: MENU + MENU HAMBURGESA 
    -Activamos el menu hamburgesa cuando la pantalla baje de pixeles, con esto conseguimos que el menu se adapte a diferentes tamaños de pantallas.
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

/* PREGUNTAS Y RESPUESTAS
    -Los botones seran las preguntas y los contenidos seran las respuestas.
    -También creamos una variable para guardar la altura de los contenidos (aunque en algun formato se sobreponen).
    - Con la clase creada y los estilos "desplegado" conseguimos que al hacer click se deplegue la respuesta.
 */

const botones2 = document.querySelectorAll(".pregunta");
const contenidos = document.querySelectorAll(".respuestas");
let alturasContenidos = [];

botones2.forEach((boton, indice) => {
    alturasContenidos.push(contenidos[indice].clientHeight);
    contenidos[indice].style.height = 0;
    boton.addEventListener("click", () => {
        if (contenidos[indice].classList.contains("desplegado")) {
            contenidos[indice].classList.remove("desplegado");
            contenidos[indice].style.height = 0;
        } else {
            contenidos.forEach(contenido => {
                contenido.classList.remove("desplegado");
                contenido.style.height = 0;
            });
            contenidos[indice].classList.add("desplegado");
            contenidos[indice].style.height = `${alturasContenidos[indice]}px`;
        }
    })
})
