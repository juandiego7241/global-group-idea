document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.getElementById("footer");

    if (footerElement) {
        const footerHTML = `
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
            <div class="md:w-1/3">
                <img src="img/logofooter.png" alt="Global Group" class="h-32 w-auto mb-6">
                <p class="text-gray-500 text-sm leading-relaxed">Ingeniería Integral de Riesgos TQRE. Soluciones multidisciplinarias para un mundo industrial complejo.</p>
            </div>
            
            <div class="md:w-1/3">
                <h4 class="text-gg-gold font-bold uppercase tracking-wider mb-6">Sede Central</h4>
                <ul class="space-y-4 text-gray-400">
                    <li class="flex items-start gap-3"><i class="fa-solid fa-location-dot mt-1 text-gg-gold"></i> Av. Tomás Marsano 1368, Miraflores</li>
                    <li class="flex items-center gap-3"><i class="fa-solid fa-envelope text-gg-gold"></i> info@globalgroupsa.net</li>
                    <li class="flex items-center gap-3"><i class="fa-solid fa-phone text-gg-gold"></i> +(511) 446 4627</li>
                </ul>
            </div>

            <div class="md:w-1/3 text-right">
                <h4 class="text-gg-gold font-bold uppercase tracking-wider mb-6">Urgencias 24/7</h4>
                <p class="text-3xl font-white font-black">+(51) 995716810</p>
                <div class="mt-8 flex justify-end gap-4">
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gg-gold hover:text-white transition-all"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gg-gold hover:text-white transition-all"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
            </div>
        </div>
        <div class="text-center text-gray-700 text-xs mt-16 pt-8 border-t border-gray-900">
            © 2026 Global Group SA. Todos los derechos reservados.
        </div>
        `;

        footerElement.innerHTML = footerHTML;
        // Añadir clases base al contenedor del footer
        footerElement.className = "bg-black text-white py-16 border-t-4 border-gg-gold";
    }
});