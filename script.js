// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('hidden');
    });
  }

  // Form submission handler
  const footerForm = document.querySelector('footer form');
  if (footerForm) {
    footerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const emailInput = document.getElementById('email');
      const email = emailInput.value.trim();
      
      if (email) {
        alert(`Thank you for contacting us: ${email}`);
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address');
      }
    });
  }
});