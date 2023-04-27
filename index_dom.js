import scrollTopButton from "./boton_scroll.js";
import countDown from "./cuenta_Regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";


// vamos importando y guardando todos los archivos:

//CODIGO DEL MENU HAMBURGUESA:
const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    //CODIGO PARA EL MENU DE HAMBURGUESA:
    hamburgerMenu(".panel-btn", ".panel", ".menu a"); // el selector que vamos a mover
    //CODIGO DEL RELOJ DIGITAL:
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma-para-despertar-5-.mp3", "#activar-alarma", "#desactivar-alarma");
    //CODIGO PARA EL TEMPORIZADOR CUENTA REGRESIVA:
    countDown("countdown", "Jun 10, 2023 11:00:00", "Feliz Cumpleaños BeBe 🤪")// no usamos el gatito porque no vamos a utilizar querySelector, en este caso pedimos directamente el id
    // segundo parametro una fecha valida, y el tercer parametro el mensaje para cuando llegue la fecha indicada
    //CODIGO PARA EL BOTON INFERIOR DERECHOQUE ME DEVUELVE AL INICIO:
    scrollTopButton(".scroll-top-btn")// le ponemos el selector del html que es una clase
    //CODIGO PARA LA RESPONSIVE MEDIA:
    responsiveMedia("youtube", "(min-width:1024px)", `<a href="https://www.youtube.com/watch?v=81tXbOYJRJw" target="_blank" rel="noopener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/81tXbOYJRJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`); //esto es para youtube;// y copiamos el enlace en el contenido de movil, y una copia del codigo del video en el de escritorio
    responsiveMedia("gmaps", "(min-width:1024px)", `<a href="https://goo.gl/maps/2JRcuSsgbMkenKsMA" target="_blank" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410253496!2d2.291906376906394!3d48.858373600707175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses!2sco!4v1682562776411!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`); // esta es para gmaps;
    //CODIGO PARA LA RESPONSIVE PRUEBA:
    responsiveTester("responsive-tester")
});


d.addEventListener("keydown", (e) =>{
    // CODIGO PARA LA PELOTA
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

//CODIGO PARA EL BOTON DARK MODO OSCURO:
// la invocamos afuera del DOM ContentLoaded porque en este archivo de tema oscuro estamos haciendo el llamado a este DOM ContentLoaded y no podemos hacerlo en ambos sitios.
darkTheme(".dark-theme-btn", "dark-mode");