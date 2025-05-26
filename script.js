document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('show');
  });
  
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
  });
  