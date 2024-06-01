
/* VALIDACIÓN INICIO DE SESIÓN */

/* Se utilizó el link proporcionado por el material de estudio 
Clase 18. JS 6.pptx
https://www.youtube.com/watch?v=L5Yin6K4ARs
Javascript #10: Formularios
*/


/* https://bluuweb.github.io/desarrollo-web-bluuweb/11-08-js-form/#expresiones-regulares */
/* Expresiones regulares */


/* Atrapar al elemento por su id,
y lo guardamos en una variable */
const formulario = document.getElementById("form-iniciar-sesion");
const userEmail = document.getElementById("userEmail");
const userContrasenia = document.getElementById("contrasenia");


/* Detectar evento "submit"*/
formulario.addEventListener("submit", (e) => {
          /* con el preventDefault(); estamos evitando el comportamiento por default
          que tiene el método GET */
          e.preventDefault();

          /* Expresiones regulares */
          const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

          /* Campos vacíos */
          /* Nos fijamos si el valor de la variable que guardamos es igual a vacío
          nombreDeLaVariable.value === vacío
           */
          if (userContrasenia.value === "") {
                    return alert("Debe ingresar una contraseña.");
          } if (userEmail.value === "") {
                    return alert("Debe ingresar una dirección de correo eléctronico.");
          }
          /* test(); devuelve true o false,
          por eso lo colocamos dentro de un if,
          y si la expresion resulta falsa, entonces que aparezca un alert */
          if (!regUserEmail.test(userEmail.value)) {
                    return alert("Formato email no válido, por favor corrige los errores e intenta nuevamente.");
          }

          alert("El formulario fue procesado correctamente.");

          /* Limpiar campos */
          formulario.reset();
});


/* VALIDACIÓN REGISTRARSE */