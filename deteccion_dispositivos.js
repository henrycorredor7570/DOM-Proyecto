const d = document;
const n = navigator;
const ua = navigator.userAgent;

// NOSA PUEDE SERVIR PARA REDIRECCIONES O PARA CONTENIDO EXCLUSIVO DEPENDIENDO QUE TIPO DE SISTEMA Y NAVEGADOR SE DETECTE
export default function userDeviceInfo(id){
    // console.log(ua);
    const $id = d.getElementById(id);
    const isMobile = {// detectar si es movil
        android:()=>ua.match(/android/i), // busca si en la cadena de texto del user agent .match encontro la palabra android, y la i es una bandera que no toma en cuenta mayusculas ni minusculas
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any:function(){// cualquier dispositivo valido para moviles
            return this.android() || this.ios() || this.windows();
        },
    },
    isDesktop = { // detectar si es de escritorio
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any:function(){//cualquier dispositivo valido para computadores de escritorio
            return this.linux()||this.mac()||this.windows();
        },
    },
    isBrowser = {
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|opera mini/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any: function(){ // cualquier navegador es bienvenido
            return (this.ie()||this.edge()||this.chrome()||this.safari()||this.firefox()||this.opera());
        }
    };

    $id.innerHTML=`
    <ul>
        <li>User Agent: <b>${ua}</br></i>
        <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</br></i>
        <li>Navegador: <b>${isBrowser.any()}</br></i>
        `  
    // primero imprime la cadena de texto user agent 
    // despues imprime el sistema operativo o plataforma en la que me encuentro(si isMobile.any es verdadero quiero imprimir el sistema operativo que detecte).
    // yy por ultimo el navegador.

    /* PARA REALIZAR CONTENIDO EXCLUSIVO */

    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome</mark></p>`;
    }
    if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en Firefox</mark></p>`;
    }
    if(isDesktop.linux()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
    }
    if(isDesktop.mac()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p>`;
    }
    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`;
    }

    /* Redirecciones */
    if(isMobile.android()){
        window.location.href = "https://www.google.com.co"
    }
}