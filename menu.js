document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.getElementById("navbar");

    // DEFINITIVO: Barra fija, negra y visible siempre
    navElement.className = "fixed w-full z-50 transition-all duration-300 bg-black/95 backdrop-blur-md shadow-lg py-4 border-b border-white/10";

    const menuHTML = `
        <div class="container mx-auto px-6 flex justify-between items-center">
            <div class="logo">
                <a href="index.html">
                    <img src="img/logo1.png" alt="Global Group Logo" class="h-16 w-auto object-contain hover:opacity-90 transition-opacity duration-300">
                </a>
            </div>
            
            <!-- Menú Desktop -->
            <div class="main-menu hidden md:flex items-center space-x-10">
                <a href="index.html" class="nav-link font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors text-sm">Home</a>
                <a href="proyectos.html" class="nav-link font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors text-sm">Proyectos</a>
                <a href="soluciones.html" class="nav-link font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors text-sm">Servicios</a>
                <a href="tecnologias.html" class="nav-link font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors text-sm">Tecnologías</a>
                <a href="#footer" class="px-6 py-2 bg-gg-gold text-gg-charcoal font-bold rounded-full text-xs uppercase tracking-widest hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">Contáctanos</a>
            </div>

            <!-- Botón Móvil -->
            <div class="md:hidden">
                <button id="mobile-menu-btn" class="text-white focus:outline-none p-2">
                    <i class="fa-solid fa-bars text-2xl"></i>
                </button>
            </div>
        </div>

        <!-- Menú Móvil Desplegable -->
        <div id="mobile-menu" class="hidden md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 absolute left-0 right-0 top-full shadow-xl w-full">
            <div class="flex flex-col px-6 py-6 space-y-6">
                <a href="index.html" class="nav-link text-base font-medium uppercase tracking-wider text-white/80 hover:text-white transition-colors block">Home</a>
                <a href="proyectos.html" class="nav-link text-base font-medium uppercase tracking-wider text-white/80 hover:text-white transition-colors block">Proyectos</a>
                <a href="soluciones.html" class="nav-link text-base font-medium uppercase tracking-wider text-white/80 hover:text-white transition-colors block">Servicios</a>
                <a href="tecnologias.html" class="nav-link text-base font-medium uppercase tracking-wider text-white/80 hover:text-white transition-colors block">Tecnologías</a>
                <a href="#footer" class="mt-4 px-8 py-3 bg-gg-gold text-gg-charcoal font-bold rounded-full text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg text-center block">Contáctanos</a>
            </div>
        </div>
    `;

    navElement.innerHTML = menuHTML;

    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const desktopLinks = document.querySelectorAll(".main-menu a");
    const mobileLinks = document.querySelectorAll("#mobile-menu a");

    const setActiveLink = (links) => {
        links.forEach(link => {
            if (link.getAttribute("href") === currentPath) {
                // La clase 'active' se manejará por CSS para evitar conflictos de color
                link.classList.add("active");
            }
        });
    };

    setActiveLink(desktopLinks);
    setActiveLink(mobileLinks);

    // Lógica para abrir/cerrar menú móvil
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            const icon = mobileBtn.querySelector('i');
            
            if (isHidden) {
                icon.classList.replace('fa-xmark', 'fa-bars'); // Volver a hamburguesa
            } else {
                icon.classList.replace('fa-bars', 'fa-xmark'); // Cambiar a X
            }
        });
    }
});