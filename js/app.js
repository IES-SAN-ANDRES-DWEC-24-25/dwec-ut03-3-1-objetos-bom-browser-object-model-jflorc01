// Author:  Carlos Tessier
// Version: 1.0
// Date:    2024/10/01

// variable ventana emergente
var myWindow;

// Variable para el  temporizador
var timer;
// Número de segundos transcurridos
var count = 0;

document.addEventListener("DOMContentLoaded", function () {
  // Variables botones
  const btnInfo = document.getElementById("btnInfo");
  const btnUrl = document.getElementById("btnUrl");
  const btnClose = document.getElementById("btnClose");

  const url = document.getElementById("inputUrl");
  const btnBack = document.getElementById("btnBack");
  const btnForward = document.getElementById("btnForward");
  const redirection = document.getElementById("redirection");

  // Añadir eventos click a los botones

  // Muestra la información del navegador
  btnInfo.addEventListener("click", function () {
    informacionNavegador();
    function informacionNavegador(){
      let resultado = "";
      resultado += "Nombre Navegador: " + navigator.appName;
      resultado += "\nSistema Operativo: " + navigator.platform;
      resultado += "\nVersión navegador: " + navigator.appVersion;
      resultado += "\nIdioma navegador: " +navigator.language;

      alert(resultado);
      
    }
  });

  // Redirecciona a la URL introducida en el input a la nueva ventana mywindow
  btnUrl.addEventListener("click", function () {
    // si la URL no está vacía, redireccionar a www.educa.jcyl.es"
    if(url.value == ""){
      myWindow = window.open("https://www.educa.jcyl.es","educacyl","toolbar=yes,location=no,resizable=no,height=300");
    }else{
      myWindow = window.open(url.value, "Nueva ventana", "toolbar=yes,location=no,resizable=no,height=300");
    }
  });

  // Cierra la ventana emergente mywindow
  btnClose.addEventListener("click", function () {
    myWindow.close();
  });

  // Retroceder en la historia del navegador
  btnBack.addEventListener("click", function () {
    history.back();
  });

  // Avanzar en la historia del navegador
  btnForward.addEventListener("click", function () {
    history.forward();
  });

  // Temoporizador
  btnStartTimer.addEventListener("click", function () {
    // Iniciar el temporizador timer cada segundo para poner en counter el valor de segundos transcurridos
  });

  btnStopTimer.addEventListener("click", function () {
    // Detener el temporizador timer
  });

  btnRedirection.addEventListener("click", function () {
    // avisar en el párrafo redirection que se va a redireccionar a www.educa.jcyl.es en 5 segundos
    // Redireccionar a la página de la Junta de Castilla y León en una nueva pestaña en 5 segundos
  });

  updateScreenSize();
});

// Función para actualizar el tamaño de la pantalla
function updateScreenSize() {
  document.getElementById("width").textContent = window.innerWidth;
  document.getElementById("height").textContent = window.innerHeight;
}

// Evento de cambio de pantalla
// Si cambia el tamaño de la pantalla, llamamos de nuevo a la función updateScreenSize
window.onresize = updateScreenSize;

// Eventos de conexión a internet
/*
window.addEventListener('COMPLETAR', () => {
    document.getElementById('status').textContent = 'Desconectado';
  });
*/

/*
  window.addEventListener('COMPLETAR', () => {
    document.getElementById('status').textContent = 'Conectado';
  });
  */

// mostrar la información del navegador en una ventana emergente
function informacionNavegador() {}

// Función para redireccionar a una URL en una ventana nueva
function redirect(url) {}
