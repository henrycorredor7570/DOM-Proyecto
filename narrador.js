const d = document;
const w = window;

export default function speechReader(){
    // primero capturamos en variables del dom los elementos con los que vamos a trabajar
    const $speechSelect = d.getElementById("speech-select");
    const $speechTextarea = d.getElementById("speech-text");
    const $speechBtn = d.getElementById("speech-btn");
    const speechMessage = new SpeechSynthesisUtterance();//guardamos en una variable que no es del dom, la que me va a guardar el APi que me permite leer esos mensajes

    console.log(speechMessage);

    // las voces las invocamos a la hora que carguemos el documento:
    let voices = [];

    // le delegamos tres eventos al document:

    // este domcontentloaded por eso no lo pusimos en el index porque le haciamos el llamdo aca
    d.addEventListener("DOMContentLoaded",(e)=>{
        w.speechSynthesis.addEventListener("voiceschanged", (e)=>{// vamos a asignarle al speechSynthesis el voiceschanged y esto es lo que me va a detectar y me va a formar la lista de las voces
        voices = w.speechSynthesis.getVoices();  // mi varibale voices sea = a ejecutar el metodo  w.speechSynthesis y ya las voces quedan guardadas dentro de la variable voices

        voices.forEach(voice =>{
            const $option = d.createElement("option");
            $option.value = voice.name;// por cada voz crear una etiqueta option con y como atributo valor le vamos a asignar lo que venga en cada una de las voces en su atributo name
            $option.textContent = `${voice.name} *** ${voice.lang}`; //y en su propiedad textcontent vamos a colocar el nombre de la voz y el idioma

            $speechSelect.appendChild($option);// en speechSelect en su contenido le agregamos $option
        });
        })
    });

    //para que cada que cambiemos una opcion del select necesitamos cambiar la voz y se la asigne a la variable de la speechMessage
    d.addEventListener("change",(e)=>{
        if(e.target === $speechSelect){// si el evento que origina elspeech select entonces se va a detectar dicha programacion
            speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
        }
    });

    //cuando le demos clik al boton el narrador lea el texot
    d.addEventListener("click",(e)=>{
        if(e.target === $speechBtn){
            speechMessage.text = $speechTextarea.value;// la propiedad text es el texto que va a guardar para posteriormente el narrador va a hablar

            // y aqui finalmente la hacemos hablar:
            w.speechSynthesis.speak(speechMessage);
        }
    });
}