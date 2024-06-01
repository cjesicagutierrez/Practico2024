

/* ************************ */


/* INICIO GALERIA DE PERFILES DE EXPLORADORES */

/* Los perfiles van a ser importados desde la api
https://randomuser.me/api/?results=6
solo se utilizarán algunos datos de esos usuarios
para llenar el template de html
*/

function invocarApiPerfiles() { // boton "Seleccionar otros"
    const json =
        /* petición http ó https */
        fetch('https://randomuser.me/api/?results=6')
            /* que la respuesta se convierta en .json() */
            .then(response => response.json())
            /* atrapar el objeto json y colocarlo en una función */
            .then(data => dibujarDatos_perfiles(data));
    console.log(json);
}


// objetoCompleto.atributo
// objetoCompleto.atributo.map(x => Filas(x));
//   función map, agarra un objeto y a cada elemento le aplica una funcion determinada, obteniendo un nuevo objeto.
// const nuevoObjeto = objetoCompleto.atributo.map(x => Filas(x));


function dibujarDatos_perfiles(json) {

    const filas_perfiles = json.results.map(x => Fila_perfiles(x));

    /* Llamamos al elemento donde se ubicará el template, por su id */
    document.getElementById('div-api-exploradores').innerHTML = filas_perfiles.join(' ');
}


// impresión en html - template String
//obj = nombre del parametro, que es el objeto que recibe la función


// Esta función completa el template String con las variables obtenidas de la API
function Fila_perfiles(obj) {

    /* Cambiamos la clase de contenedor-titulo-desactivado en exploradores.html
    llamando al elemento por su id,
    y le colocamos una clase que es visible,
    según como definimos las clases en exploradores.css 
    Esto lo hago solo para que en el caso de falta de conexión
    o no se cumplan las promesas, 
    en la pantalla este div permanecerá oculto.*/
    document.querySelector('#contenedor-titulo-desactivado').className = 'contenedor-titulo-activado';


    /* Definimos genero para la presentación del explorador,
    buscamos en el objeto json el atributo "gender"
    y establecemos condiciones según el caso de cada perfil */
    let genero = "Soy exploradora";
    if (obj.gender === "female") {
        genero = "Soy exploradora";
    } else {
        genero = "Soy explorador";
    }


    return `<div class="perfil">
                  <img src=${obj.picture.medium} alt="Logistica">
                  <div class="perfil-datos">
                       <ul>
                        <!-- listas: items etiquetas li-->   
                            <li>
                                <p>Hola.</p>
                            </li>
                            <li>
                                <p>Me llamo <b>${obj.name.title} ${obj.name.first}  ${obj.name.last}</b></p>
                            </li>
                            <li>
                                <p>Tengo ${obj.dob.age} años</p>       
                            </li>
                            <li>
                                <p>Mi usuario es ${obj.login.username}</p>   
                            </li>
                            <li>
                                <p>y mi correo ${obj.email}</p>
                            </li>
                            <li>
                                <p><b>${genero}</b></p>
                            </li>
                       </ul>
                   </div>
          </div>
          `
}


/* ************************ */