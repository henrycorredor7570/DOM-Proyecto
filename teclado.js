const d = document;
//para jugar con la pelotita:

let x = 0;
let y = 0;// estas dos variables me permiten controlar el movimiento;
export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitsBall = $ball.getBoundingClientRect();// limitar los movimiento que tiene la pelota
    //... para que no se salga del cuadrado, manejo de colisiones
    const limitsStage = $stage.getBoundingClientRect();
    console.log(e.keyCode);
    console.log(e.key);
    console.log(limitsBall, limitsStage)
         
    
    switch(e.keyCode){
        case 37://left
            if(limitsBall.left > limitsStage.left){
                e.preventDefault();// apagar todos los comportamientos por defecto que tenga el teclado, esto es para 
    //desactivar  los scroll arriba abajo izquierda y derecha para que dejen mover la pelota libremente
                x--; // esta condicion es para que no se salga la pelota del cuadro
            }
            break;
        case 38://up
            if(limitsBall.top > limitsStage.top){
                e.preventDefault();
                y--;
            }
            break;
        case 39://right
            if(limitsBall.right < limitsStage.right){// se invierte el signo 
                e.preventDefault();
                x++;
            }
            break;
        case 40://down
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                y++; 
            }
            break;
            default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`; // para mover la pelotita en la direccion que se indique con transform
            // y con el uso de las variables creadas podemos hacer los movimientos ir sumandole
    // NO ME FUNCIONO
     }
export function shortcuts(e){// esta funcion recibe el evento como tal
   /*  console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
 */
    // hacer que cuando el usuario presione la tecla alt + a arroje una alerta:
    if(e.key === "a" && e.altKey){ // si presionamos la letra a y alt al mismo tiempo
        alert("Haz lanzado una alerta con el teclado"); 

    }
    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado"); 
    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado"); 
    }
}

