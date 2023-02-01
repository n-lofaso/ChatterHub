const loginHandler = async () => {
// Gets input from the fields
  const username = document.querySelector('#login-username').value.trim();
  const loginEmail = document.querySelector('#login-email').value.trim();
  const loginPassword = document.querySelector('#login-password').value.trim();

  if (username && loginEmail && loginPassword) {
    const response = await fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify,
      headers: { 'Content-Type': 'application/json' },
    });
// Directs user to homepage if response is ok
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      console.error(response.statusText);
    }
  }
};

const signupHandler = async () => {
  const username = document.querySelector('#login-username').value.trim();
  const signupEmail = document.querySelector('#login-email').value.trim();
  const signupPassword = document.querySelector('#login-password').value.trim();

  if (username && signupEmail && signupPassword) {
    const response = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      console.error(response.statusText);
    }
  }
};

document
  .querySelector('#login-button')
  .addEventListener('click', loginHandler);

document
  .querySelector('#signup-button')
  .addEventListener('click', signupHandler);
