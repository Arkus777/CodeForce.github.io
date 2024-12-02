// scripts.js

// Smooth Scrolling para navegación interna (si aplica)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Validación y envío de formulario (ya incluido en contact.html)
// Puedes expandir esta sección para manejar envíos reales

// Animación de aparición de elementos al hacer scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.content-section');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Inicializar animaciones de visibilidad
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.content-section');
    elements.forEach(el => {
        el.classList.add('hidden');
    });
});
