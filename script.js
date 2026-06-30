// Laboratorio Bioquímico Clínico Chiacchiera
// Animación de aparición suave al hacer scroll (sin dependencias externas)

document.addEventListener('DOMContentLoaded', function () {
  var elementosReveal = document.querySelectorAll('.reveal');

  // Si el navegador no soporta IntersectionObserver, mostrar todo directamente
  if (!('IntersectionObserver' in window)) {
    elementosReveal.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          observer.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  elementosReveal.forEach(function (el) {
    observer.observe(el);
  });
});
