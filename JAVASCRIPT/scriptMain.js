(function () {
  const slidesContainer = document.querySelector('.carrusel .slides');
  const slides = document.querySelectorAll('.carrusel .slide');
  const prevBtn = document.querySelector('.carrusel .prev');
  const nextBtn = document.querySelector('.carrusel .next');
  let index = 0;

  function showSlide(i) {
    if (slides.length === 0) return;
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  // Inicialización: ancho total del contenedor
  if (slides.length > 0) {
    slidesContainer.style.width = `${slides.length * 100}%`;
    slides.forEach(slide => (slide.style.width = `${100 / slides.length}%`));
  }

  // Eventos de botones
  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(index - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(index + 1));

  // Autoplay opcional (descomenta si lo quieres)
  // setInterval(() => showSlide(index + 1), 5000);
})();

// ================== Lightbox ==================
function abrirLightbox(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

function cerrarLightbox(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('active');
}