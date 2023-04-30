const d = document;
const n = navigator;

export default function webCam(id){
    const $video = d.getElementById(id);// capturar lo que viene en la variable id

    if(n.mediaDevices.getUserMedia){// si en el navegador existe una funcion getUserMedia
        n.mediaDevices
        .getUserMedia({video:true, audio:false})// podemos activar el video y audio con parametros(esta funcion es una promesa)
        .then((stream)=>{
            console.log(stream);
            $video.srcObject=stream;
            $video.play();
        })// devolver el string de datos
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin", `<p>¡Sucedió el siguiente error!: </mark>${err}</mark></p>`);// aftered es hermano anterior del video para que lo ubique antes de la etiqueta vide y nos los coloque en un parrafo esto: <p></mark>${err}</mark></p>
            // console.log(`¡Sucedió el siguiente error!:${err}`);
        });
    }
}