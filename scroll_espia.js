const d = document;
export default function scrollSpy(){
    /* a quien me interesa estar observando: */
    const $sections = d.querySelectorAll("section[data-scroll-spy]");// traeme todas las secciones que tengan el atributo que les agregue el data-scroll-spy que son las que voy a estar observando
    const cb =(entries)=>{// entries son todos los elementos que tienen asignado un observador
        // console.log("entries", entries);
        // por cada una de esas section tenemos que hacer la siguiente programacion:
        entries.forEach((entry)=>{// entry es el elemento que esta entrando al observador
            const id=entry.target.getAttribute("id");// obtenemos el id de cada una de las secciones


            if(entry.isIntersecting){ // es esa propiedad que hay entre cada seccion esa interseccion, y cunando un elemento ya tenga la propiedad de tru en el isIntersecting significa que se esta visualizando
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{// cuando la interseccion sea falsa se la vamos a remover
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }

        });
    };

    const observer = new IntersectionObserver(cb,{
        //rootMargin: "-250px"// le aplicamos ese margen para que ya no seleccione de dos en dos sino cada uno individual, en negativo es porque disminuimos la distancia entre los margenes de interaccion

        threshold: [0.5, 0.75], // es mejor esta opcion que rootMargin: aqui se maneja con un porcentaje y cuando la seccion tenga determinado porcentaje esque se inicia a iluminar su correspondiente, se activa cuando el elemento tenga una visibilidad desde 0.5 es el 50% hasta el 0.75 que es el 75%

    });



    $sections.forEach((el)=> observer.observe(el)); //ejecutamos el metodo observe y recibe el objeto que queremos observar
}