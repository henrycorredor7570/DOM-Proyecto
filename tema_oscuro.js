const d = document;
const ls = localStorage;

export default function darkTheme(btn,classDark){ // el segundo parametro es el que va a activar el modo oscuro
    const $themeBtn = d.querySelector(btn);
    // crear un selewctor que apunte a los elementos que tengan data-dark
    const $selectors = d.querySelectorAll("[data-dark]")// los corchetes significan vamos a aplicar esta regla a los elementos que tengan este atributo data-dark

    // console.log($selectors);

    let moon = "🌙";
    let sun = "☀️";

    //USAMOS EL LOCAL STORAGE PARA CONSERVAR EN MEMORIA LA DECISION DEL USUARIO DE GUARDAR MODO OSCURO O MODO CLARO Y QUE CUANDO RECARGUE LA PAGINA NO SE BORRE LO QUE GUARDO
    const lightMode = ()=>{
        $selectors.forEach((el)=> el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme", "light");
    };

    const darkMode = ()=>{
        $selectors.forEach((el)=> el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark");
    };

    d.addEventListener("click",(e)=>{
        if (e.target.matches(btn)){//si el objeto que origina el evento = al selector de la variabl btn 
            if($themeBtn.textContent === moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    });
    // aqui hacemos el llamado al DOM ContentLoaded  es por eso que en el index no se podia realizar el llamado dentro del DOM ContentLoaded porque ya se llamo aca
    d.addEventListener("DOMContentLoaded", (e)=>{
    //cuando cargue el documento preguntamos si existe una variable local storage
    if(ls.getItem("theme")===null) ls.setItem("theme", "light");// si no existe una variable en local storage la vamos a crear "theme" y le asignamos el valor de "ligth"
    if(ls.getItem("theme")==="light")lightMode();// si local storage que se llama theme su valor es = a light entonces ejecutamos el codigo para poner el dia claro.
    if(ls.getItem("theme")==="dark")darkMode();
});
}
