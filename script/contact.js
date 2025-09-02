document.getElementById('contactForm').addEventListener('submit', function (e) {
  const btn = document.getElementById('submitBtn');
  const messageBox = document.getElementById('formMessage');

  btn.disabled = true;
  btn.textContent = 'Sending...';

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'Send Message';
  }, 2000);
});
