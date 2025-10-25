// ===============================
// 🌗 Modo Oscuro / Claro Toggle
// ===============================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Verificar si hay un modo guardado en localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

// Alternar el modo al hacer clic
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Actualizar el tema
    const isDark = body.classList.contains("dark-mode");

    // Guardar preferencia en localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
});



// ===============================
// scroll menu
// ===============================
const HOME_MENU = document.getElementById("home_menu");
const SERVICES_MENU = document.getElementById("services_menu");
const ABOUT_ME_MENU = document.getElementById("about_me_menu");

// secciones
const INICIO = document.getElementsByTagName("body");
const PROYECTS_SECTION = document.getElementById("projects_section");
const ABOUT_ME = document.getElementById("about_me");

const scrollBoton = (elemento) => {
    const target = document.querySelector(elemento);
    if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY; // Obtiene la posición del elemento
        window.scrollTo({
            top: top,
            behavior: 'smooth' // Desplazamiento suave
        });
    }
};

HOME_MENU.addEventListener("click", () => { scrollBoton('body'); });
SERVICES_MENU.addEventListener("click", () => { scrollBoton('#projects_section'); });
ABOUT_ME_MENU.addEventListener("click", () => { scrollBoton('#about_me'); });




// ===============================
// cambio de categorias - proyectos
// ===============================
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const landingPages = document.getElementById('landing-pages');
    const apps = document.getElementById('apps');

    // Asignar eventos a los botones
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Quitar la clase "active" de todos
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Activar el botón clickeado
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            // Mostrar/Ocultar según categoría
            if (category === 'all') {
                landingPages.classList.remove('hidden');
                apps.classList.remove('hidden');
            } else if (category === 'landing') {
                landingPages.classList.remove('hidden');
                apps.classList.add('hidden');
            } else if (category === 'apps') {
                landingPages.classList.add('hidden');
                apps.classList.remove('hidden');
            }
        });
    });

    // 👇 Ejecutar el filtro "Todos" automáticamente al cargar
    const defaultButton = document.querySelector('.filter-btn[data-category="all"]');
    if (defaultButton) {
        defaultButton.click(); // simula el clic en el botón "Todos"
    }
});
