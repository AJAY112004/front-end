document.addEventListener('DOMContentLoaded', () => {
    // Example: Add interactivity to show items
    const showItems = document.querySelectorAll('.show-item');

    showItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on ${item.querySelector('h3').textContent}`);
            // Additional functionality like navigating to a details page can be added here
        });
    });

    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
