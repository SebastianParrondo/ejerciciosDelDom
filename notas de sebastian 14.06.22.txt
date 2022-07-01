import hamburguerMenu from "./DOM/menu_hamburguesa.js";
import { alarma, relojDigital } from "./DOM/reloj-digital.js";
import { shortcuts } from "./DOM/atajo_de_teclado.js";
import { moveBall } from "./DOM/teclado.js";
import countdown from "./DOM/countdown.js";
import scrollTopButton from "./DOM/Botton_scroll.js";
import darkTheme from "./DOM/night.js";
import responsiveMedia from "./DOM/objeto_resposive.js";
import responsivetester from "./DOM/prueba_responsive.js";
import userDeviceInfo from "./DOM/deteccion_dispositivos.js";
import networkStatus from "./DOM/deteccion_red.js";
import webCam from "./DOM/deteccion_webcam.js";
import getGeoLocation from "./DOM/geolocalizacion.js";
import serchFilters from "./DOM/filtros_busqueda.js";
import draw from "./DOM/sorteo_digital.js";
import slider from "./DOM/carrusel.js";
import scrollSpy from "./DOM/scroll_espia.js";
import smartVideo from "./DOM/video_inteligente.js";
import contactFormValidations from "./DOM/validaciones_formulario.js";
import speechReader from "./DOM/narrador.js";






const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a")
    relojDigital("#btn-iniciar", "#btn-detener", "#reloj")
    alarma("./assets/alarma.mp3", "#btn-iniciar-alarma", "#btn-detener-alarma")
    countdown("countdown","sep 14, 2022","Feliz cumpleaños moustro de la programación")
    scrollTopButton("#goUp-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)", 
        `<a href="https://www.youtube.com/watch?v=NwjqnojmwUQ" target="_blank" rel="noopener noreferrer">Escuchate este temón</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/NwjqnojmwUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia(
        "gMaps",
        "(min-width: 1024px)", 
        `<a href="https://goo.gl/maps/eyF2Mwy1cwuzCmeR8" target="_blank" rel="noopener noreferrer">Gran lugar</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.0285854075205!2d-58.65237392051973!3d-34.65362338197281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf56804f12c5%3A0xea33ad895bfa6487!2sPlaza%20de%20los%20Espa%C3%B1oles!5e0!3m2!1ses!2sar!4v1650503236015!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsivetester("responsive-tester");   
    userDeviceInfo("user-divice");
    webCam(`webcam`);
    getGeoLocation(`geolocation`)
    serchFilters(".card-filter", ".card")
    draw("#btn-lottery", ".player")
    slider("./assets/CuatroPesosdePropina02LaLlama.mp3");
    scrollSpy();
    smartVideo();
    contactFormValidations();
    
})

/* funciones que aplican despues de la carga del DOM*/
darkTheme("#dark-btn", "is-dark", "#area", "#ball");
networkStatus();
speechReader();


 /* ***** Atajos de teclado ***** */ 
 d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e, "#ball", "#area");
})





















