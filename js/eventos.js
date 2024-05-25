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

