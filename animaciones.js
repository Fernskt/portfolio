 
function animateOnScroll(selector, animationClass) {
  // Obtener todos los elementos con la clase especificada en el selector
  var elements = document.querySelectorAll(selector);

  // Recorrer la lista de elementos
  elements.forEach(function(element) {
    // Obtener la posición del elemento en la pantalla
    var elementPosition = element.getBoundingClientRect().top;

    // Obtener la altura de la pantalla
    var screenHeight = window.innerHeight;

    // Comprobar si el elemento está en el área visible de la pantalla
    if (elementPosition < screenHeight) {
      // Añadir la clase especificada en la variable animationClass al elemento para iniciar la animación
      element.classList.add(animationClass)
    }
  });
}

window.addEventListener('scroll', function() {
  animateOnScroll('.mi-seccion', 'active');
});

window.addEventListener('scroll', function() {
  animateOnScroll('.progress-circle', 'animation');
});

/*Animacion Maquina de escribir y linea de comando*/

  let i = 0;
let text = ">Desarrollador web Fullstack ";

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    // Crea un intervalo de parpadeo cada 500 milisegundos
    setInterval(function() {
      document.getElementById("text").innerHTML = text.substring(0, text.length - 1) + " _";
      setTimeout(function() {
        document.getElementById("text").innerHTML = text;
      }, 250);
    }, 500);
  }
}

typeWriter();
