// Main handler function when button is clicked
function handleForm() {
  clearErrors(); // Clear previous errors

  const username = getInputValue('username');
  const email = getInputValue('email');
  const password = getInputValue('password');

  if (validateForm(username, email, password)) {
    alert("Form submitted successfully!");
    // Optionally submit the form via JS
    // document.getElementById('myForm').submit();
  }
}

// Utility: Get input value by id
function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

// Utility: Show error for a field
function setError(id, message) {
  document.getElementById(id + 'Error').textContent = message;
}

// Utility: Clear all error messages
function clearErrors() {
  setError('username', '');
  setError('email', '');
  setError('password', '');
}

// Validation logic
function validateForm(username, email, password) {
  let isValid = true;

  if (username === "") {
    setError('username', 'Username is required.');
    isValid = false;
  }

  if (email === "") {
    setError('email', 'Email is required.');
    isValid = false;
  } else if (!validateEmail(email)) {
    setError('email', 'Invalid email format.');
    isValid = false;
  }

  if (password.length < 6) {
    setError('password', 'Password must be at least 6 characters.');
    isValid = false;
  }

  return isValid;
}

// Email format checker
function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email.toLowerCase());
}
