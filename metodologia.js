// ==========================================
// LÓGICA DE LA LÍNEA DE TIEMPO INTERACTIVA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleccionamos los elementos del DOM
    const dots = document.querySelectorAll('.timeline-dot');
    const titleEl = document.getElementById('timeline-title');
    const descEl = document.getElementById('timeline-desc');

    // 2. Verificamos que existan para evitar errores
    if (dots.length > 0 && titleEl && descEl) {
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                // A. Quitar la clase 'active' de todos los puntos
                dots.forEach(d => d.classList.remove('active'));
                
                // B. Añadir la clase 'active' al punto clickeado
                dot.classList.add('active');

                // C. Efecto de desvanecimiento (Fade Out)
                // Bajamos la opacidad y movemos el texto ligeramente hacia abajo
                titleEl.style.opacity = '0';
                titleEl.style.transform = 'translateY(10px)';
                
                descEl.style.opacity = '0';
                descEl.style.transform = 'translateY(10px)';

                // D. Esperar un momento (200ms) para cambiar el texto
                setTimeout(() => {
                    // Obtenemos los datos desde los atributos HTML "data-"
                    const newTitle = dot.getAttribute('data-title');
                    const newDesc = dot.getAttribute('data-desc');

                    titleEl.innerText = newTitle;
                    descEl.innerText = newDesc;
                    
                    // E. Reaparecer el texto (Fade In)
                    // Regresamos la opacidad y la posición
                    titleEl.style.opacity = '1';
                    titleEl.style.transform = 'translateY(0)';
                    
                    descEl.style.opacity = '1';
                    descEl.style.transform = 'translateY(0)';
                    
                }, 200); // Este tiempo debe coincidir con la rapidez de tu transición CSS si la tuvieras
            });
        });
    }
});