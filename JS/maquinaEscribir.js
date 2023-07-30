let i = 0;
let text = ">Desarrollador web Fullstack";

function typeWriter() {
    if (i < text.length) {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter(), 100);
     
    } else {
      // Crea un intervalo de parpadeo cada 500 milisegundos
      setInterval(function() {
        document.getElementById("text").innerHTML = text.substring(0, text.length ) + "_";
        setTimeout(function() {
          document.getElementById("text").innerHTML = text;
        }, 250);
      }, 500);
    }
  }
  
  typeWriter(); 
 