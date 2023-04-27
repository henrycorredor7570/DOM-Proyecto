const d = document;

export default function countDown(id, limitDate, finalMessage){     
    const $countdown = d.getElementById(id);
    const countdownDate = new Date(limitDate).getTime();// obtenemos el valor de la fecha en milisegundos para que quenden mas facil los calculos
    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime();// esta es la fecha actual en ms
        let limitTime = countdownDate - now;// la resta de la fecah que le di menos la actual
        let days = Math.floor(limitTime/(1000*60*60*24));// division entre el tiempo limite expresado en ms y el equivalente en milisegundos a un dia}
                                                // con la parte sobrante de los dias salen las horas, y de las horas los minutos y asi tambien los segundos... sobrante son las decimas despues del punto
        let hours = ("0" + Math.floor((limitTime % (1000*60*60*24))/(1000*60*60))).slice(-2);
        let minutes = ("0" + Math.floor((limitTime % (1000*60*60))/(1000*60))).slice(-2);// el 0 unicamente lo concatenamos para que cuando llegue a un valor solito me anteponga el 0 es decir 09, 08 etc
        let seconds = ("0" + Math.floor((limitTime % (1000*60))/1000)).slice(-2);;

        $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;
        
          // cuando la fecha limite llegue a 0:
        if(limitTime < 0){
            clearInterval(countdownTempo);// limpiamos el set interval
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`; //y ya le pasamos el tercer parametro que es el mensaje cuando esto llegue a 0
        }
    }, 1000); 

}