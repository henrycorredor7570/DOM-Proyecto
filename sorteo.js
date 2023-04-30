const d = document;

export default function draw(btn, selector){
    const getWinner = (selector)=>{// a esta le pasamos el selector donde debe buscar las coincidencias
        const $players = d.querySelectorAll(selector);
        const random = Math.floor(Math.random()*$players.length);
        const winner = $players[random];
        console.log($players, random, winner);
        return `El ganador es: ${winner.textContent}`;
    }

    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            let result = getWinner(selector); 
            alert(result); // lo que me arroje de resultado la getwinner lo mandamos en una alerta
            console.log(result);
        }
    });
}