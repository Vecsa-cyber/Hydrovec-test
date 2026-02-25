// ==========================================
// ANIMATED COUNTERS (ADAPTADO)
// ==========================================

function animateCounter(element, target, duration = 2000) {
    const isFloat = target % 1 !== 0; // Detectar si es decimal (como 1.6)
    const increment = target / (duration / 20);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
            
            // FORMATO FINAL
            if (isFloat) {
                // Si es decimal (1.6), mostramos 1 decimal y sin signo '+'
                element.textContent = target.toFixed(1) + ' M'; 
            } else if (target >= 100) {
                // Si es entero (100), agregamos el '+'
                element.textContent = Math.floor(target).toLocaleString() + '+';
            } else {
                element.textContent = Math.floor(target);
            }
        } else {
            // DURANTE LA ANIMACIÓN
            if (isFloat) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.ceil(current).toLocaleString();
            }
        }
    }, 20);
}

// Intersection Observer
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            
            // CAMBIO IMPORTANTE: Usamos parseFloat en vez de parseInt
            // para que detecte el "1.6" correctamente
            const target = parseFloat(counter.getAttribute('data-target'));
            
            if (!counter.classList.contains('counted')) {
                counter.classList.add('counted');
                animateCounter(counter, target);
            }
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});