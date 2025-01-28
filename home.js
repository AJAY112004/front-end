// Add a smooth scroll to the "Explore Features" button
document.querySelector('.btn').addEventListener('click', function (event) {
  event.preventDefault();  // Prevent default anchor behavior
  const targetSection = document.querySelector('#features');
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
});

// Simple form validation (you can add more logic if needed)
document.querySelector('form').addEventListener('submit', function (event) {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if (!name || !email || !message) {
    event.preventDefault();  // Prevent form submission
    alert('Please fill in all fields');
  } else {
    alert('Message sent successfully!');
  }
});
