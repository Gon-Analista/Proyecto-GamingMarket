window.addEventListener('DOMContentLoaded', (event) => {
  // Obtiene la referencia a la sección de destino por su ID
  const seccionDestino = document.getElementById('contenido');

  // Comprueba si se encontró la sección
  if (seccionDestino) {
     // Hace scroll suave hasta la sección de destino
     seccionDestino.scrollIntoView({ behavior: 'smooth' });
  }
});


const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})



$(window).scroll(function() {
  checkVisibility('#contenido');
});

function checkVisibility(elementId) {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var elementOffset = $(elementId).offset().top;
  var activatePosition = elementOffset - (windowHeight * 0.9);

  if (scrollTop >= activatePosition) {
    $(elementId).addClass('active');
  }
}









