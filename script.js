// DARK MODE TOGGLE
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// COUNTER INTERACTIVITY
let count = 0;
const counter = document.getElementById('counter');
document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

// COLLAPSIBLE FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// FORM VALIDATION
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent actual submission

  let valid = true;

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('formSuccess').textContent = '';

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (name.length < 3) {
    valid = false;
    document.getElementById('nameError').textContent = 'Name must be at least 3 characters.';
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    valid = false;
    document.getElementById('emailError').textContent = 'Enter a valid email.';
  }

  // Password validation
  const password = document.getElementById('password').value;
  if (password.length < 6) {
    valid = false;
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
  }

  if (valid) {
    document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
    form.reset();
  }
});
