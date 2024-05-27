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
    console.log('NavLinks:', navLinks);



    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const urlNav = link.getAttribute('href');
            console.log('Nav link clicked:', urlNav); 
            loadContent(urlNav);
        });
    });

    
        const carouselLinks = document.querySelectorAll('.carousel-link');
        console.log('CarouselLinks:', carouselLinks);
        
    
        carouselLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const url = link.getAttribute('href');
                console.log('Carousel link clicked:', url);
                loadContent(url);
            });
        });
    }, 1000); 
    
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

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón de "Donar" por su clase
    var btnDonar = document.querySelector('.btn-donar');

    // Agregar event listener al botón de "Donar" solo si existe
    if (btnDonar) {
        btnDonar.addEventListener('click', function(event) {
            validarDonacion() 
            if (!validarDonacion()) {
                event.preventDefault();
            }
        });
    }
});

// Función de validación de donación
function validarDonacion() {
    // Obtener los valores de los campos de formulario
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    // Validar cada campo
    if (nombre === '') {
        alert('Por favor ingresa tu nombre.');
        return false;
    }
    if (apellido === '') {
        alert('Por favor ingresa tu apellido.');
        return false;
    }
    if (email === '') {
        alert('Por favor ingresa tu correo electrónico.');
        return false;
    }
    // Agregar validación de correo electrónico adicional si es necesario
    if (!validateEmail(email)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return false;
    }
    if (telefono === '') {
        alert('Por favor ingresa tu número de teléfono.');
        return false;
    }
    // Agregar validación de número de teléfono adicional si es necesario
    if (!validatePhoneNumber(telefono)) {
        alert('Por favor ingresa un número de teléfono válido.');
        return false;
    }

    // Opcional: Validar campos adicionales como mensaje si es necesario

    // Si todos los campos son válidos, enviar el formulario
    return true;
}

// Función para validar el formato de correo electrónico
function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para validar el formato de número de teléfono
function validatePhoneNumber(phoneNumber) {
    var regex = /^[0-9]+$/;
    return regex.test(phoneNumber);
}


// Función para validar y mostrar los mensajes de advertencia
function mostrarMensajesAdvertencia() {
    // Obtener todos los campos de formulario requeridos
    var camposRequeridos = document.querySelectorAll('input[required], select[required], textarea[required]');

    // Recorrer todos los campos requeridos
    camposRequeridos.forEach(function(campo) {
        // Obtener el elemento de advertencia asociado al campo
        var advertencia = campo.parentNode.querySelector('.text-danger');
        
        // Mostrar el mensaje de advertencia si el campo está vacío
        if (campo.value.trim() === '') {
            advertencia.style.display = 'block';
        } else {
            advertencia.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el formulario
    var formulario = document.querySelector('form');

    // Agregar event listener para el evento submit del formulario solo si existe
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // Mostrar los mensajes de advertencia
            mostrarMensajesAdvertencia();
            
            // Verificar si hay campos vacíos
            var camposVacios = document.querySelectorAll('input[required], select[required], textarea[required]:not(:valid)');
            if (camposVacios.length > 0) {
                // Evitar que el formulario se envíe si hay campos vacíos
                event.preventDefault();
            }
        });
    }
});

