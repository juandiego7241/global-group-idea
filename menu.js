document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.getElementById("navbar");
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navElement.classList.add("scrolled");
        } else {
            navElement.classList.remove("scrolled");
        }
    };

    // Aplicar lógica solo en la página de inicio
    if (isHomePage) {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Ejecutar al cargar para el estado inicial
    } else {
        // En las otras páginas, el menú es sólido desde el principio
        navElement.classList.add("solid-nav");
    }

    const menuHTML = `
        <div class="container mx-auto px-6 flex justify-between items-center">
            <div class="logo">
                <a href="index.html">
                    <img src="img/logo2.png" alt="Global Group Logo" class="h-16 w-auto object-contain">
                </a>
            </div>
            
            <!-- Menú Desktop -->
            <div class="main-menu hidden md:flex items-center space-x-8">
                <a href="index.html" class="nav-link">Home</a>                
                <a href="proyectos.html" class="nav-link">Proyectos</a>
                <a href="soluciones.html" class="nav-link">Servicios</a>
                <a href="tecnologias.html" class="nav-link">Tecnologías</a>
                <a href="#contacto" class="px-8 py-3 bg-gg-charcoal text-white font-bold rounded-full text-xs uppercase tracking-widest hover:bg-gg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">Cotizar</a>
            </div>

            <!-- Botón Móvil -->
            <div class="md:hidden">
                <button id="mobile-menu-btn" class="text-gg-charcoal focus:outline-none p-2">
                    <i class="fa-solid fa-bars text-2xl"></i>
                </button>
            </div>
        </div>

        <!-- Menú Móvil Desplegable -->
        <div id="mobile-menu" class="hidden md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute left-0 right-0 top-full shadow-xl">
            <div class="flex flex-col px-6 py-6 space-y-6">
                <a href="index.html" class="nav-link-mobile">Home</a>
                <a href="proyectos.html" class="nav-link-mobile">Proyectos</a>
                <a href="soluciones.html" class="nav-link-mobile">Servicios</a>
                <a href="tecnologias.html" class="nav-link-mobile">Tecnologías</a>
                <a href="#contacto" class="px-8 py-3 bg-gg-charcoal text-white font-bold rounded-full text-xs uppercase tracking-widest hover:bg-gg-gold transition-all duration-300 shadow-lg text-center block">Cotizar</a>
            </div>
        </div>
    `;

    navElement.innerHTML = menuHTML;
    // Asegurar que el contenedor del menú sea relativo para posicionar el dropdown
    navElement.classList.add('relative');

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
            mobileMenu.classList.toggle('hidden');
        });
    }
});