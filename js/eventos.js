function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const contentContainer = document.getElementById('content-container');
            contentContainer.innerHTML = data;
        });
}
function setupEventListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    const carouselLinks = document.querySelectorAll('a.carousel-href');



    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const urlNav = link.getAttribute('href');
            loadContent(urlNav);
        });
    });

    carouselLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const urlCarou = link.getAttribute('href');
            loadContent(urlCarou);
        });
    });
    
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Carga el navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            // Llama a setupEventListeners después de cargar el navbar
            setupEventListeners();
            loadContent('main.html');
        });

    // Carga el footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});


