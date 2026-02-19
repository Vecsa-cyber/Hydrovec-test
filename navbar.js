// ==========================================
// NAVBAR DINÁMICO E INTERACTIVO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');

    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
        <nav id="navbar" class="navbar">
            <div class="container nav-container">
                <a href="index.html" class="logo-container">
                    <img src="new-icon.png" alt="Hydrovec Logo" class="logo-img">
                </a>

                <div class="mobile-menu-btn" id="mobile-toggle">
                    <i class="ph ph-list"></i>
                </div>

                <ul class="nav-links" id="nav-menu">
                    <li><a href="index.html" id="link-inicio">Inicio</a></li>

                    <li class="dropdown">
                        <a href="index.html#productos" class="dropdown-trigger" id="link-sistemas">
                            Sistemas <i class="ph ph-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="osmosis.html">Ósmosis Inversa</a></li>
                            <li><a href="desmi.html">Desmineralización</a></li>
                            <li><a href="ultrafil.html">Ultrafiltración</a></li>
                            <li><a href="monitoreo.html">Monitoreo IoT</a></li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="#" class="dropdown-trigger" id="link-soluciones">
                            Soluciones <i class="ph ph-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="solucion1.html">Industria Alimenticia</a></li>
                            <li><a href="solucion2.html">Sector Farmacéutico</a></li>
                            <li><a href="solucion3.html">Procesos Metalmecánicos</a></li>
                        </ul>
                    </li>

                    <li><a href="about.html" id="link-nosotros">Nosotros</a></li>
                    
                    <li class="mobile-only-link"><a href="#" onclick="toggleModal()">Contacto</a></li>
                </ul>

                <a href="#" class="nav-btn desktop-btn" onclick="toggleModal()" style="text-decoration: none;">Contacto</a>
            </div>
        </nav>`;
        
        setActivePage();
        initOriginalEffects();
        initMobileMenu(); // Inicializamos el menú móvil
    }
});

// Detectar página actual
function setActivePage() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const menuMap = {
        'index.html': 'link-inicio',
        '': 'link-inicio',
        'about.html': 'link-nosotros',
        'solucion1.html': 'link-soluciones',
        'solucion2.html': 'link-soluciones',
        'solucion3.html': 'link-soluciones',
        'osmosis.html': 'link-sistemas',
        'desmi.html': 'link-sistemas',
        'ultrafil.html': 'link-sistemas',
        'monitoreo.html': 'link-sistemas'
    };

    const activeId = menuMap[page];
    if (activeId) {
        const activeLink = document.getElementById(activeId);
        if (activeLink) {
            activeLink.classList.add('active');
            if (activeId !== 'link-inicio') {
                activeLink.style.color = "var(--bio-cyan)";
            }
        }
    }
}

// Efectos de Scroll Originales
function initOriginalEffects() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            if(navbar) navbar.classList.add('scrolled');
        } else {
            if(navbar) navbar.classList.remove('scrolled');
        }

        if (backToTop) {
            if (window.scrollY > 500) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || this.classList.contains('nav-btn')) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Si hace click en un enlace, cerramos el menú móvil automáticamente
                document.getElementById('nav-menu').classList.remove('active');
                document.querySelector('#mobile-toggle i').className = 'ph ph-list';
            }
        });
    });
}

// --- LÓGICA DEL MENÚ MÓVIL (NUEVO) ---
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const toggleIcon = mobileToggle.querySelector('i');

    // Abrir/Cerrar menú al tocar hamburguesa
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Cambiar icono: de list (hamburguesa) a X
        if (navMenu.classList.contains('active')) {
            toggleIcon.className = 'ph ph-x';
        } else {
            toggleIcon.className = 'ph ph-list';
        }
    });

    // Para que los submenús (Sistemas/Soluciones) abran al tocarlos en móvil
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    dropdowns.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Evita que salte arriba
                this.parentElement.classList.toggle('mobile-open');
            }
        });
    });
}