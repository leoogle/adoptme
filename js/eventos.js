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

// Get all navbar links
const navLinks = document.querySelectorAll('navbar');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Fetch the content of the linked page
    fetch(event.target.href)
      .then(response => response.text())
      .then(data => {
        // Update the content container with the fetched data
        const contentContainer = document.getElementById('content-container');
        contentContainer.innerHTML = data;
      })
      .catch(error => console.error('Error:', error));
  });
});
