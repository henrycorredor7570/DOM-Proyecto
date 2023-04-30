const d = document;
const w = window;
export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]");

    const cb = (entries) =>{
        entries.forEach(entry=>{// por cada entrada ejecuta la siguiente programacion
            if(entry.isIntersecting){// si ya se ha dado la interseccion
                entry.target.play();// si es asi accedemos al metodo pplay para reproducirlo
            }else{
                entry.target.pause();// si no entra a la interseccion lo pausamos
            }
            // para cuando queramos cambiar de pestaña el video no se siga reproduciendo y se pause:
            w.addEventListener("visibilitychange", e=>{
            d.visibilityState === "visible" // si vivibilityState es visible
                ? entry.target.play() // si es verdad reproduzca el video porque estamos visibles si no lo pause
                :entry.target.pause()
            });
        });
    };

    const observer = new IntersectionObserver(cb,{threshold: 0.5}); // threshold recordemos que es el limite de interseccion donde con el 0.5 50% visto en pantalla empiece a  reproducir el video

    // a que elementos del dom le asignamos ese observador:
    $videos.forEach(el=>observer.observe(el));// por cada video ejecuta la funcion observer y el metodo observer
}