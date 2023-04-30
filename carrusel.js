const d = document;

export default function slider(){
    const $nextBtn = d.querySelector(".slider-btns .next");
    const $prevBtn = d.querySelector(".slider-btns .prev");
    const $slides = d.querySelectorAll(".slider-slide");


    let i = 0; // variable contadora para cuando ya haya llegado a la ultima slide se devuelva a la primera y viceversa
    d.addEventListener("click", (e)=>{
        if(e.target=== $prevBtn){// si el boton que origino el evento es el previus=>
            e.preventDefault();// prevenimos el comportamiento por defecto para que no se deslice hacia arriba la pantalla cuando demos click en el boton
            $slides[i].classList.remove("active");// a la slide actual le vas a quitar de su lista de clases la clase active de su lista de clases; 
            i--;//luego dismiye en 1 el valos de i osea vale -1
            // cuando llegue a menos de 0 tendria que regresarse a la ultima:
            if(i<0){
                i = $slides.length-1;
            }
            //ahora que le quitamos  la calse que visualiza a la slide anterior, ahora hay que agregarle a la slide actual la clase active
            $slides[i].classList.add("active");
        }

        
        // la misma condicion pero a la inversa
        if(e.target=== $nextBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;// le aumentamos con el boton de next
            if(i>=$slides.length){
                i = 0;
            }
            $slides[i].classList.add("active");
        }
    });

    
}