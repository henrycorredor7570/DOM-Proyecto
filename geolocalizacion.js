const d = document;
const n = navigator;
export default function getGeolocation(id){
    const $id = d.getElementById(id);
    const options = {
        enableHighAccuracy:true,// le estamos diciendo que el dispositivo trate de hacer la mejor lectura que pueda
        timeout: 5000,//cuanto tiempo va a estar esperando la respuesta para tomar la lectura
        maximumAge:0  //para que no se guarden caches las lecturas
    };

    const success = (position) =>{// funcion en caso de que tenga exito la lectura
        let coords = position.coords;
        // console.log(position);
        $id.innerHTML = `
        <p>Tú posición actual es:</p>
        <ul>
            <li>Latitud:<b>${coords.latitude}</b></li>
            <li>Longitud:<b>${coords.longitude}</b></li>
            <li>Precisión:<b>${coords.accuracy}</b>metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `; // y le agregamos la url de la ubicacion exacta, el 1z es el zoom y va hasta 20z
    };
    const error = (err) => {// funcion en caso de que ocurra un error
        $id.innerHTML = `<p><mark>Error ${err.code}:${err.message}</mark></p>`,// mesnaje de error mas perzonalizado en pantalla
        console.log(`Error ${err.code}:${err.message}`);
    };
    n.geolocation.getCurrentPosition(success, error, options);//para acceder a la geolocalizacion, y con currentPosition obtenemos la ubicacion actual y esta recibe dos parametros una conexion de exito y otra de error
}