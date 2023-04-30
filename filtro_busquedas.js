const d = document;

export default function searchFilters(input, selector){//necesitamos el selector que va a hacer la busqueda y luego en donde va a hacer la busqueda
    d.addEventListener("keyup", (e)=>{
        if(e.target.matches(input)){

            //para salir con la tecla esc cuando queremos limpiar el imput:
            if(e.key === "Escape")e.target.value = "";
            
            d.querySelectorAll(selector).forEach(el=>{// selector son todas las card
                el.textContent.toLowerCase().includes(e.target.value)// el e.target.value es todo lo que ingresamos en el input si eso coincide con el texContent devuelve un true o false
                    ? el.classList.remove("filter") // si es verdadero le quita la clase filter que pusimos en el css, lo quita porque coincide con lo que el usuario escribio y como la clase filter display es none, osea oculto, pues al removerla entonces lo muestra 
                    :el.classList.add("filter")// si es falso la agrega la clase filter para que oculte el elemento
            })
        }
    })
}