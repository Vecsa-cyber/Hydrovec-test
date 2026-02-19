// ==========================================
// ANIMATED COUNTERS
// ==========================================

// Función para animar los contadores
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 20);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
            
            // Agregar sufijo según el valor
            if (target === 99) {
                element.textContent = target + '%';
            } else {
                element.textContent = target.toLocaleString() + '+';
            }
        } else {
            element.textContent = Math.ceil(current).toLocaleString();
        }
    }, 20);
}

// Intersection Observer para iniciar contadores cuando sean visibles
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            
            // Iniciar animación solo una vez
            if (!counter.classList.contains('counted')) {
                counter.classList.add('counted');
                animateCounter(counter, target);
            }
        }
    });
}, observerOptions);

// Observar todos los contadores
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});