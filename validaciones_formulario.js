const d = document;

export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form");// necesitamos detectar el formulario
    const $inputs = d.querySelectorAll(".contact-form [required]");//capturar todos los input que tengan como atributo required
    
    $inputs.forEach((input)=>{// por cada input hacemos lo siguiente
        const $span = d.createElement("span"); // creamos la etiqueta span
        $span.id=input.name;// vamos a asignarle como atributo id el valor que viene en nustro input en su propiedad name para que sea unico 
        $span.textContent=input.title;    // y el mensaje de erro lo obtenemos de :.... los atributos title que le pusimos en el html
        $span.classList.add("contact-form-error", "none");// a esa span en su lista de clases le agregamos la clase contact-form-error esa clase esta en el css
        input.insertAdjacentElement("afterend", $span); // el span lo insertamos abajo de su correspondiente input... afterend es el hermano despues y agregamos el elemento como tal
    
    });

    d.addEventListener("keyup", (e)=>{

        if(e.target.matches(".contact-form [required]")){// esta delegacion de eventos ocurre cuando esto es true
            let $input = e.target;
            let pattern = $input.pattern || $input.dataset.pattern;// traerme el atributo pattern  y si no esta pattern buscar en dataset que es el mismo data-pattern del html
            if(pattern && $input.value!==""){// validacion cuando el input tengan patron y cuando el valor del input sea diferente de nada
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)// si el valor del input no cumple con la expresion regular
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }
            
            if(!pattern){// cuando el input no tenga patron
                return $input.value === ""// si el input value es exactamente igual a nada entonces muestra el mensaje de error si no no lo muestres
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }
        }
    
    });

    /* el evento submit es el evento que procesa ya nuestro formulario */
    d.addEventListener("submit", (e)=>{
        // e.preventDefault();// prevenimos la accion predeterminada de nuestro formulario// comentamos el prevent default para poder ebnviar el correo de prueba... en la direccion que le pusimos en el html
        alert("Enviando formulario");
    

        // para cargar el loader a la pagina:
        const $loader = d.querySelector(".contact-form-loader");
        const $response = d.querySelector(".contact-form-response");

        //en el momento que el formulario se procese le quitamos la clase none al formulario para que se pueda ver:
        $loader.classList.remove("none");

        /* simulamos el envio del formulario con un setTimeout */

        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();// reseteamos el formulario para que se limpie

            setTimeout(() =>  $response.classList.add("none"),3000);
        }, 3000);
    });
}