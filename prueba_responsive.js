const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e) => {
        if(e.target === $form){
            e.preventDefault();// para evitar que se procese la pagina es decir que la url me envie los datos 
            // queremos que cuando el formulario se procese abrir una ventana:
            tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);// como parametro cual es la direccion que quiero abrir en esa nueva ventana y esta en el atributo direccion
        }
    });

    //para no cerrar manualmente sino con el boton cerrar:
    d.addEventListener("click", (e)=>{
        if(e.target === $form.cerrar)tester.close();
    })
}