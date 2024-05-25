window.addEventListener('DOMContentLoaded', (event) => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });

        

    
});

        window.addEventListener('DOMContentLoaded', (event) => {
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
});



document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            setupNavLinks();
            loadContent('main.html');  // Carga el contenido inicial
        });
});

function setupNavLinks() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            loadContent(link.getAttribute('href'));
        });
    });
}

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
        });
}
