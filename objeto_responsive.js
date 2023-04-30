const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);// es la que me va a guardar la media query que el usuario me pase en la variable mq
    // cuando detecte que la media query ya no existe es mas pequeña cambiamos el contenido para dejar solo el enlace:
    const responsive = (e) =>{// recibe el elemento de la mediaquery
        if(e.matches){ //si el elemento coincide entonces hacemos lo siguiente
            d.getElementById(id).innerHTML = desktopContent; //si supera los 1024px quiere decir que es de escritorio
        }else{
            d.getElementById(id).innerHTML = mobileContent; // si no lo volvemos a tipo movil
        }
        // console.log("MQ", breakpoint, e.matches);

    };
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}