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

function setupEventListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    const carouselItems = document.querySelectorAll('.carousel-href');
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const contentContainer = document.getElementById('content-container');
                contentContainer.innerHTML = data;
            });
    
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = link.getAttribute('href');
            loadContent(url);
        });
    });

    carouselItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const carouselId = item.closest('.carousel-href').id;
            const carouselIndex = Array.from(item.parentNode.children).indexOf(item);
            handleCarouselClick(carouselId, carouselIndex);
        });
    });
}



function handleCarouselClick(carouselId, carouselIndex) {
    const carousel = document.getElementById(carouselId);
    const carouselInstance = bootstrap.Carousel.getInstance(carousel);
    carouselInstance.to(carouselIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            setupEventListeners();
            loadContent('main.html');
        });
});


