
// JavaScript for Home Page Navigation

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to navbar items
    const navItems = document.querySelectorAll('.navbar ul li');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on ${item.textContent}`);
            // Additional functionality for navigation can be added here
        });
    });

    // Example: Highlight the clicked item
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
