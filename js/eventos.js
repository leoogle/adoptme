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



    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const urlNav = link.getAttribute('href');
            console.log('Nav link clicked:', url); 
            loadContent(urlNav);
        });
    });

  
    
}



setTimeout(() => {
    const carouselLinks = document.querySelectorAll('.carousel-item .nav-link');
    

    carouselLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = link.getAttribute('href');
            console.log('Carousel link clicked:', url);
            loadContent(url);
        });
    });
}, 1000); 

window.addEventListener('DOMContentLoaded', (event) => {
    // Carga el navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data
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


