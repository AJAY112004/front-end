// Simple script to add interactivity (e.g., highlight active page)
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
