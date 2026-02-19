
    function contactarVentas() {
        // --- CONFIGURACIÓN DE SEGURIDAD ---
        // 1. Código de País (México = 52)
        const country = "52"; 
        
        // 2. Tipo de línea (1 = Celular en México, a veces necesario)
        const type = "1"; 
        
        // 3. Lada (Ej. 871 para Torreón/Gómez)
        const lada = "844"; 
        
        // 4. Número Local (7 dígitos restantes)
        // CÁMBIALO AQUÍ POR EL REAL:
        const number = "3410584"; 
        
        // 5. Mensaje predefinido (Codificado para URL)
        const message = encodeURIComponent("Hola, vi su sitio web y me interesa una cotización.");

        // --- GENERACIÓN DEL ENLACE ---
        // Armamos el link final solo en este momento
        const finalLink = `https://wa.me/${country}${type}${lada}${number}?text=${message}`;
        
        // Abrimos en una pestaña nueva
        window.open(finalLink, '_blank');
    }