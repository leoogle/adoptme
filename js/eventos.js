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
    const carouselLinks = document.querySelectorAll('carousel-href');
    console.log('Setting up event listeners for nav-links:', navLinks);


    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const urlNav = link.getAttribute('href');
            console.log('Nav link clicked:', url); 
            loadContent(urlNav);
        });
    });

    carouselLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const urlCarou = link.getAttribute('data-href');
            loadContent(urlCarou);
        });
    });
    
}


// Delay setting up event listeners for carousel links after loading carousel content
setTimeout(() => {
    const carouselLinks = document.querySelectorAll('.carousel-item .nav-link');
    
    console.log('Setting up event listeners for carousel links:', carouselLinks); // Debug logging

    carouselLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = link.getAttribute('href');
            console.log('Carousel link clicked:', url); // Debug logging
            loadContent(url);
        });
    });
}, 1000); // Adjust delay time as needed

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


