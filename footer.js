// ==========================================
// FOOTER DINÁMICO, MODULAR Y RESPONSIVO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // Cambié el nombre de la variable a footerPlaceholder para mayor claridad
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        // --- 1. INYECTAR EL HTML ---
        footerPlaceholder.innerHTML = `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-grid">

                    <div class="footer-col">
                        <a href="#" class="footer-logo">HYDROVEC<span class="dot">.</span></a>
                        <p class="footer-desc">
                            Liderando la revolución hídrica con ingeniería de precisión y sostenibilidad.
                        </p>
                        <div class="social-links">
                            <a href="#"><i class="ph ph-linkedin-logo"></i></a>
                            <a href="#"><i class="ph ph-instagram-logo"></i></a>
                            <a href="#"><i class="ph ph-facebook-logo"></i></a>
                        </div>
                    </div>

                    <div class="footer-col">
                        <h4>Explorar</h4>
                        <ul class="footer-links">
                            <li><a href="#innovacion">Innovación</a></li>
                            <li><a href="#productos">Sistemas</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#impacto">Impacto Ambiental</a></li>
                            <li><a href="about.html">Sobre nosotros</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Contacto</h4>
                        <ul class="contact-list">
                            <li>
                                <i class="ph ph-envelope-simple"></i>
                                <span>contacto@hydrovec.com</span>
                            </li>
                            <li>
                                <i class="ph ph-phone"></i>
                                <span>+52 (871) 123-4567</span>
                            </li>
                            <li>
                                <i class="ph ph-whatsapp-logo"></i>
                                <span>Soporte 24/7</span>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Ubicación</h4>
                        <p class="address-text">
                            Parque Industrial<br>
                            Torreón, Coahuila, México.
                        </p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112444.38370589326!2d-103.4573356!3d25.5428666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdba99435d64d%3A0xc3676a3b40e4f8cf!2sTorre%C3%B3n%2C%20Coah.!5e0!3m2!1ses!2smx!4v1707500000000!5m2!1ses!2smx"
                            class="map-frame" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>

                <div class="footer-bottom">
                    <p>© 2026 Hydrovec Water Solutions. Todos los derechos reservados.</p>
                    <div class="legal-links">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>
            </div>
        </footer>`;

        // --- 2. INYECTAR EL CSS RESPONSIVO ---
        const footerStyles = `
            /* Estructura Base (Computadora) */
            .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-bottom: 40px; }
            .map-frame { width: 100%; height: 150px; border: none; border-radius: 8px; margin-top: 10px; }
            .footer-bottom { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 20px; flex-wrap: wrap; }
            
            /* Tablets (2 Columnas) */
            @media (max-width: 992px) { 
                .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; } 
            }
            
            /* Celulares (1 Columna apilada y centrada) */
            @media (max-width: 600px) {
                .footer-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
                .social-links { justify-content: center; margin-top: 15px; }
                .contact-list li { justify-content: center; }
                .footer-bottom { flex-direction: column; text-align: center; gap: 15px; }
                .legal-links { justify-content: center; }
            }
        `;

        // Creamos la etiqueta <style>, le metemos el texto y la colgamos en el <head>
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = footerStyles;
        document.head.appendChild(styleSheet);

        // --- 3. INICIALIZAR FUNCIONES EXTERNAS ---
        // Validamos que las funciones existan antes de llamarlas para evitar errores en consola
        if (typeof setActivePage === "function") setActivePage();
        if (typeof initOriginalEffects === "function") initOriginalEffects();
        if (typeof initMobileMenu === "function") initMobileMenu(); 
    }
});