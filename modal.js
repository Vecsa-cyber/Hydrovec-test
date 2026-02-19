// ==========================================
// CONTACT MODAL
// ==========================================

function toggleModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.toggle('active');
    
    // Bloquear/desbloquear scroll del body
    if (modal.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    const modal = document.getElementById('contact-modal');
    
    // Si el click fue en el overlay (no en el contenido)
    if (event.target === modal) {
        toggleModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('contact-modal');
    
    if (event.key === 'Escape' && modal.classList.contains('active')) {
        toggleModal();
    }
});

// Manejar envío del formulario (opcional - para feedback)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[name="contacto-vecsa"]');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Aquí puedes agregar validaciones adicionales o feedback
            console.log('Formulario enviado');
            
            // Netlify manejará el envío automáticamente
            // pero puedes agregar un mensaje de confirmación aquí
        });
    }
});

// Función para contactar por Correo (Forzando Gmail Web)
function contactarCorreo(event) {
    // 1. Evita que el formulario recargue la página
    if(event) event.preventDefault();

    // 2. Capturar los campos
    const inputNombre = document.querySelector('input[name="nombre"]');
    const inputEmail = document.querySelector('input[name="email"]');
    const inputMensaje = document.querySelector('textarea[name="mensaje"]');

    // 3. Validar que los campos existan y tengan texto
    if (!inputNombre.value || !inputEmail.value || !inputMensaje.value) {
        alert("Por favor completa todos los campos antes de enviar.");
        return;
    }

    const nombre = inputNombre.value;
    const emailCliente = inputEmail.value;
    const mensaje = inputMensaje.value;

    // 4. Configurar el correo
    const emailDestino = "example@gmail.com";
    const subject = encodeURIComponent(`Nuevo contacto web de: ${nombre}`);
    const bodyTexto = `Nombre: ${nombre}\nCorreo del cliente: ${emailCliente}\n\nProyecto/Mensaje:\n${mensaje}`;
    const body = encodeURIComponent(bodyTexto);

    // 5. Armar el enlace directo a GMAIL WEB
    // view=cm (compose message), fs=1 (fullscreen), to= (destino), su= (asunto), body= (cuerpo)
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailDestino}&su=${subject}&body=${body}`;
    
    // 6. Ejecutar: Abrimos Gmail en una pestaña nueva para no sacar al usuario de tu página
    window.open(gmailLink, '_blank');

    // 7. Cerrar el modal y limpiar los campos
    toggleModal();
    inputNombre.value = '';
    inputEmail.value = '';
    inputMensaje.value = '';
}