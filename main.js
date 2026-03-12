document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializar AOS (Animaciones al hacer scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true, // La animación solo ocurre una vez
            offset: 100, // Comienza un poco antes de llegar al elemento
            duration: 800,
            easing: 'ease-out-cubic',
        });
    }

    // 2. Lógica de Contadores (Numbers Counter)
    const counters = document.querySelectorAll('.metric-number');
    const speed = 200; // Cuanto más bajo, más rápido

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/\D/g, ''); // Remover símbolos no numéricos para el cálculo
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment) + (counter.innerText.includes('%') ? '%' : '');
            setTimeout(() => animateCounter(counter), 20);
        } else {
            counter.innerText = target + (counter.parentElement.innerText.includes('%') ? '%' : (counter.parentElement.innerText.includes('+') ? '+' : ''));
        }
    };

    // Usar IntersectionObserver para iniciar el contador solo cuando sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});