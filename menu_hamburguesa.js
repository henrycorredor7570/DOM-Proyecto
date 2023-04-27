export default function hamburgerMenu(panelBtn,panel,menuLink){// panelBtn es el nombre del selector que pusimos en html le pasamos el boton que activa y tambien el panel  que es el que vamos a mopver
    // el parametro menu link es para permitir que cuando se de click en una de las secciones del menu se quite el menu y muestre ya la pantalla principal
    const d = document;

    d.addEventListener("click",(e) =>{
        if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){// despues del || es para activar en cualquier parte del boton incluyendo los hijos que son las lineas, que se pueda activar el boton
            // y con el * seleccionamos todos los elementos hijos para poder dar click en cualquier lado; es importante el espacio antes del * para que funcione
            // si el objeto que origina el evento coincide con el sellector de panelbtn
            d.querySelector(panel).classList.toggle("is-active");// busca el selector que tenga por nombre lo que esta en panel
        // ENTRA A SU LISTA DE CLASES Y BUSCA LA CLASE TOOGLE E INTERCAMBAI LA CLASE IS-ACTIVE
            d.querySelector(panelBtn).classList.toggle("is-active");// tambien hacemos lo mismo con el selector que esta guardado en la variable panelBtn; esto es para tener la animacion del boton que escogimos 
        }

        // para que se quite el menu de navegacion ya no es un toggle es un remove
        // y se lo tenemos que hacer a ambos tanto al panel button como al button
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
}