const d = document;
const w = window;
const n = navigator;
// esta funcion no ejecutarse a la carga del documento, se va a ejecutar cuando nuestro navegador pierda la conexion
export default function networkStatus(){
    const isOnLine = ()=>{
        const $div = d.createElement("div");
        
        if(n.onLine){// si onLine es verdadero
            $div.textContent = "Conexión Reestablecida"; // si es verdadero ponerle a ese div conexion reestablecida
            $div.classList.add("online"); // y si es asi nos aseguramos que el div en su lista de clases tenga agregada onLine y eliminada offline
            $div.classList.remove("offline");
        }else{// y caso contrario las lineas pero con conexion perdida
            $div.textContent = "Conexión Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        // y al fina la pegamos al body:
        d.body.insertAdjacentElement("afterbegin", $div)// quiero que sea el primer hijo por eso after begin y le agregamos el elemento $div

        // para que desaparezca el mensaje de conexion despues de cireto tiempo:
        setTimeout(() => {
            d.body.removeChild($div); // se elimina el div despues de 2 segundos
        }, 2000);
    };

    w.addEventListener("online", (e) => isOnLine());
    w.addEventListener("offline", (e) => isOnLine());

    
}