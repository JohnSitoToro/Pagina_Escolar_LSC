
        const slides = document.querySelectorAll('.carrusel .slide');
        const prev = document.querySelector('.carrusel .prev');
        const next = document.querySelector('.carrusel .next');
        let index = 0;

        function showSlide(i) {
            if (i < 0) index = slides.length - 1;
            else if (i >= slides.length) index = 0;
            else index = i;
            document.querySelector('.carrusel .slides').style.transform = `translateX(-${index * 100}%)`;
        }

        prev.addEventListener('click', () => showSlide(index - 1));
        next.addEventListener('click', () => showSlide(index + 1));

        // Lightbox
        function abrirLightbox(id) {
            document.getElementById(id).classList.add('activo');
        }
        function cerrarLightbox(id) {
            document.getElementById(id).classList.remove('activo');
        }

        // Carrusel textos
        const slidesTextos = document.querySelectorAll('.slide-texto');
        const prevTexto = document.querySelector('.prev-texto');
        const nextTexto = document.querySelector('.next-texto');
        let indexTexto = 0;

        function showSlideTexto(i) {
            if (i < 0) indexTexto = slidesTextos.length - 1;
            else if (i >= slidesTextos.length) indexTexto = 0;
            else indexTexto = i;
            document.querySelector('.slides-textos').style.transform = `translateX(-${indexTexto * 100}%)`;
        }

        prevTexto.addEventListener('click', () => showSlideTexto(indexTexto - 1));
        nextTexto.addEventListener('click', () => showSlideTexto(indexTexto + 1));