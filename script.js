// script.js
// Wrap everything to run after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
// Form selection
const form = document.getElementById('registration-form');
// Feedback division selection
const feedbackDiv = document.getElementById('form-feedback');


// Form submit listener
form.addEventListener('submit', function (event) {
event.preventDefault(); // Prevent actual form submission


// Retrieve and trim inputs
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();


// Validation variables
let isValid = true;
const messages = [];


// Username validation
if (username.length < 3) {
isValid = false;
messages.push('Username must be at least 3 characters long.');
}


// Email validation (basic check)
if (!(email.includes('@') && email.includes('.'))) {
isValid = false;
messages.push('Please enter a valid email address.');
}


// Password validation
if (password.length < 8) {
isValid = false;
messages.push('Password must be at least 8 characters long.');
}


// Make feedbackDiv visible
feedbackDiv.style.display = 'block';


if (isValid) {
// Success
feedbackDiv.textContent = 'Registration successful!';
feedbackDiv.style.color = '#28a745';
// Optionally reset the form after success
form.reset();
} else {
// Errors — join messages with <br>
feedbackDiv.innerHTML = messages.join('<br>');
feedbackDiv.style.color = '#dc3545';
}
});
});