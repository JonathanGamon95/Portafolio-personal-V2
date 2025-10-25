// Detecta cuando el elemento entra en pantalla
const elementos = document.querySelectorAll('.fade-in-element');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Solo se anima una vez
        }
    });
}, { threshold: 0.2 }); // 20% visible para activarse

elementos.forEach(el => observer.observe(el));
