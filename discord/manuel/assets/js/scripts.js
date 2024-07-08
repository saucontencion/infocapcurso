
/* funcion click */
$( "#enviarCorreo" ).on( "click", function() {
    alert( "El correo fue enviado correctamente..." );
  } );

/* doble click */
$(document).ready(function() {
    $('u').on('dblclick', function() {
        // Verificar el color actual
        var currentColor = $(this).css('color');
        
        // Cambiar al color rojo si es diferente
        if (currentColor !== 'rgb(255, 0, 0)') {
            $(this).css('color', 'red');
        } else {
            // Volver al color original si ya es rojo
            $(this).css('color', ''); // Esto elimina el estilo CSS, volviendo al color original del texto
        }
    });
});

/* tooltip */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/* toggle */
$(document).ready(function(){
    $('.card-title').click(function() {
      // Ocultar todo el contenido de .card excepto el h5
      $(this).parent().siblings().toggle(); // Ocultar img
      $(this).siblings().toggle(); // Ocultar .card-body excepto el h5
      $(this).toggleClass('expanded');
    });
  });

/*carrusel */
  document.querySelectorAll('.carousel-indicators .btn').forEach(function(indicator) {
    indicator.addEventListener('click', function() {
      var slideTo = this.getAttribute('data-slide-to');
      var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleCaptions'));

      carousel.to(slideTo); // Ir a la diapositiva específica

      // Cambiar la clase activa del indicador
      document.querySelectorAll('.carousel-indicators .btn').forEach(function(indicator) {
        indicator.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
