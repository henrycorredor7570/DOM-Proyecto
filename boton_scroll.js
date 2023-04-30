const d = document;
const w = window;

// solo necesita saber cual es el selector que va a desencadenar la programacion:
export default function scrollTopButton(btn){
    // este ejercicio lo desenadenamos cuando detecte el scroll de la ventana
    const $scrollBtn = d.querySelector(btn);// guardamos en una variable el selector del boton
    // evento de window scroll para detectar a que distancioa quiero mostrar u ocultar dicho boton
    w.addEventListener("scroll", e=>{// resolvemos que se vea o no el boton
       let scrollTop = w.pageYOffset || d.documentElement.scrollTop; //alguna de las dos propiedades guardar en la variable
      
       // y aqui ya depende de cada quien a cuantos pixeles quiero que se muestre el botn:
       if(scrollTop > 700){
          $scrollBtn.classList.remove("hidden");// se la quitamos para que aparezca el boton  
       }else{
        // caso contrario se la agregas y desaparece el boton
            $scrollBtn.classList.add("hidden");
       }
    //    console.log(w.pageYOffset, d.documentElement.scrollTop); // propiedades para ver que distancia se mueve el scroll de la barra, arrojan el mismo resultado ambas
    });

    // solo resta darle click al boton:
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",// recibe el comportamiento behavior si quiero que sea con una animacion
                top:0,// a donde quiero que regrese la barra de desplazamiento vertical en este caso al inicio;
                // left:0, para movimientos horizontales
            })
        }
    });
}
