function animateOnScroll(selector, animationClass) {
  // Obtener todos los elementos con la clase especificada en el selector
  var elements = document.querySelectorAll(selector);

  // Crear un IntersectionObserver
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // Añadir la clase de animación para iniciar la animación
        entry.target.classList.add(animationClass);
      } else {
        // Quitar la clase de animación cuando el elemento no está en el área visible
        entry.target.classList.remove(animationClass);
      }
    });
  });

  // Observar cada elemento
  elements.forEach(function(element) {
    observer.observe(element);
  });
}

// Reiniciar la animación cuando el usuario hace scroll
window.addEventListener('scroll', function() {
  animateOnScroll('.mi-seccion', 'active');
  animateOnScroll('.mi-seccion4', 'active');
  animateOnScroll('.progress-circle', 'animation');
});

// Llamar a animateOnScroll para inicializar las animaciones




/*Animacion Maquina de escribir y linea de comando*/


/* function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter(), 100);
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

typeWriter(); */
