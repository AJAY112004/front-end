// sports.js

// Function to display a greeting based on the time of day
function displayGreeting() {
    const hours = new Date().getHours();
    const greetingElement = document.createElement('p');
    greetingElement.classList.add('greeting');

    if (hours < 12) {
        greetingElement.textContent = "Good Morning! Ready for some sports action?";
    } else if (hours < 18) {
        greetingElement.textContent = "Good Afternoon! Catch the live sports now!";
    } else {
        greetingElement.textContent = "Good Evening! Unwind with thrilling sports!";
    }

    // Append the greeting to the hero section
    const heroSection = document.querySelector('.hero');
    heroSection.appendChild(greetingElement);
}

// Function to handle navigation highlighting
function highlightActiveNav() {
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Add 'active' class to the clicked link
            event.target.classList.add('active');
        });
    });
}

// Function to add a "back to top" button
function addBackToTopButton() {
    const button = document.createElement('button');
    button.textContent = "Back to Top";
    button.classList.add('back-to-top');

    // Append button to the body
    document.body.appendChild(button);

    // Show or hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize all functions on page load
document.addEventListener('DOMContentLoaded', () => {
    displayGreeting();
    highlightActiveNav();
    addBackToTopButton();
});
