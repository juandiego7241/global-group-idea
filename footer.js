document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.getElementById("footer");

    if (footerElement) {
        const footerHTML = `
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
            <div class="md:w-1/3">
                <img src="img/logo1.png" alt="Global Group" class="h-24 w-auto mb-6 hover:opacity-90 transition-opacity">
                <p class="text-gray-400 text-sm leading-relaxed max-w-sm">Ingeniería Integral de Riesgos TQRE. Soluciones multidisciplinarias para un mundo industrial complejo.</p>
            </div>
            
            <div class="md:w-1/3">
                <h4 class="text-gg-gold font-bold uppercase tracking-wider mb-4 text-sm">Sede Central</h4>
                <ul class="space-y-3 text-gray-400 text-sm">
                    <li class="flex items-start gap-3 hover:text-white transition-colors"><i class="fa-solid fa-location-dot mt-1 text-gg-gold"></i> Av. Tomás Marsano 1368, Miraflores</li>
                    <li class="flex items-center gap-3 hover:text-white transition-colors"><i class="fa-solid fa-envelope text-gg-gold"></i> info@globalgroupsa.net</li>
                    <li class="flex items-center gap-3 hover:text-white transition-colors"><i class="fa-solid fa-phone text-gg-gold"></i> +(511) 446 4627</li>
                </ul>
            </div>

            <div class="md:w-1/3 text-right">
                <h4 class="text-gg-gold font-bold uppercase tracking-wider mb-4 text-sm">Urgencias 24/7</h4>
                <p class="text-2xl font-white font-black mb-6">+(51) 995716810</p>
                <div class="flex justify-end gap-4">
                    <a href="#" class="w-10 h-10 border-2 border-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:text-gg-gold hover:border-gg-gold transition-all duration-300">
                        <i class="fa-brands fa-linkedin-in text-lg"></i>
                    </a>
                    <a href="#" class="w-10 h-10 border-2 border-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:text-gg-gold hover:border-gg-gold transition-all duration-300">
                        <i class="fa-brands fa-facebook-f text-lg"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="text-center text-gray-600 text-xs mt-10 pt-6 border-t border-gray-900">
            © 2026 Global Group SA. Todos los derechos reservados.
        </div>
        `;

        footerElement.innerHTML = footerHTML;
        // Añadir clases base al contenedor del footer
        footerElement.className = "bg-black text-white py-12 border-t-4 border-gg-gold";
    }
});