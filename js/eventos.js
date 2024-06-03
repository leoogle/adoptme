function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const contentContainer = document.getElementById('content-container');
            contentContainer.innerHTML = data;
        });
}
function setupEventListeners() {
    setTimeout(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const carouselLinks = document.querySelectorAll('.carousel-href');
    console.log('CarouselLinks:', carouselLinks);
    console.log('NavLinks:', navLinks);



    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const urlNav = link.getAttribute('href');
            console.log('Nav link clicked:', urlNav); 
            loadContent(urlNav);
        });
    });

    
        
        
        
    
        carouselLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const url = link.getAttribute('href');
                console.log('Carousel link clicked:', url);
                loadContent(url);
            });
        });
    }, 2000); 
    
}





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

console.log('correcto')





function leerProductos(letraInicial){
    console.log('Letra recibida:', letraInicial);
    let res = document.querySelector('#res');
    res.innerHTML = '';
    fetch('https://raw.githubusercontent.com/leoogle/adoptme/main/jsons/data.json')
    .then(respuesta => respuesta.json())
    .then(productos => {
        console.log(productos.productos)
        const productosFiltrados = productos.productos.filter(item => item.idProducto.charAt(0).toLowerCase() === letraInicial);
        console.log(productosFiltrados)
        productosFiltrados.forEach(item =>{
            
            
                
            res.innerHTML += `
                <div class="col mb-4">
                    <div class="card mx-auto shadow" style="width: 18rem;">
                        <img src="${item.strImg}" class="card-img card-img-top" alt="...">
                            <div class="card-body">
                                <h7 class="card-text">${item.strNomproducto}</h7>
                                <h5 class="card-title" style="color: #FF460B">${item.strPrecio}</h5>
                <button type="button" class="btn boton-stl1" style="float: right;" data-bs-toggle="modal" data-bs-target="${item.idProducto}">
                    Ver Más
                </button>
                            </div>
                    </div>
                </div>

                <div class="modal fade" id="${item.idProducto}" tabindex="-1" aria-labelledby="${item.idProducto}" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="${item.idProducto}">${item.strNomproducto}|</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <p> <img src="${item.strImg}" style="max-width: 54%; height: 60%;" alt=""> </p>

                </div>
                <p class="tit-modal1"> Descripción </p>
                <p class= "descr-modal1">${item.strNomproducto}</p>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
                    <button type="button"class="btn boton-stl1">Lo Quiero!</button>
                </div>
            </div>
        </div>
    </div> 
                
                `

      
    })
        
    })
}



document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('boton-stl1')) {
        let clasesBoton = event.target.classList;
        if (clasesBoton.contains('c')) {
            console.log('Letra "c" detectada');
            leerProductos('c');
        } else if (clasesBoton.contains('j')) {
            console.log('Letra "j" detectada');
            leerProductos('j');
        } else if (clasesBoton.contains('h')) {
            console.log('Letra "h" detectada');
            leerProductos('h');
        }
        console.log('Clickeado');
    } else {
        console.log('No clickeado');
    }
});






