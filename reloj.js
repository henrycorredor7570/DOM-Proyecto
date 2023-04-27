const d = document;
export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){// quien origino el evento entre parentesis
            //invocamosel metodo setInvernal cada 1000ms (1segundo)
            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();// con este metodo me permite imprimir un reloj digital
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`; // en  el id reloj del html en su contenido ponemos un h3 yu dentro el valor de clockHour y esto lo hace cada segundo
            }, 1000);
            // para que el usuario no este jodiendo la vida con el boton dandole click a toda horapara generar varios listener deshabilitamos el boton
            e.target.disabled = true; // aqui se desactiva el boton
        }
        if(e.target.matches(btnStop)){// quien origino el evento entre parentesis
            // es necesario guardar la setInterval en una variable para poder llamarla en este if:
            clearInterval(clockTempo);// limpiamos lo que esta en la variable clockTempo
            //Opcional limpiar el contenido del reloj:
            d.querySelector(clock).innerHTML = null;
            // y si ya se detuvo el reloj poner en falso la propiedad disable del boton para habiltarlo de nuevo
            d.querySelector(btnPlay).disabled = false;
        }
    });
}

export function alarm(sound, btnPlay, btnStop){
    // variable vacia inicial que me controle el temporizador
    let alarmaTempo;
    //crear una etiqueta de tipo audio para despues reproducir el sonido en esa etiqueta
    const $alarm = d.createElement("audio");// necesito acceder al api audio del navegador y reproducir el sonido
    $alarm.src = sound;// ya creamos la etiqueta y al src le asignamos la ruta del sonido
    
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){// si el boton que origina el evento coincide con lo que traemos en el boton play
            alarmaTempo = setTimeout(() => {
                $alarm.play();// hacemos sonar la alarma;

            }, 2000);// suena despues de 2 segundos.
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmaTempo);
            $alarm.pause();// para detener el sonido
            // y si quiero resetear:
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;// volvemos a activar el boton iniciar alarma
        }
    
    })

}