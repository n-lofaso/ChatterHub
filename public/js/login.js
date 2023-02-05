const loginHandler = async (e) => {
  e.preventDefault();
// Gets input from the fields
  // const username = document.querySelector('#login-username').value.trim();
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password}),
      headers: { 'Content-Type': 'application/json' },
    });
// Directs user to homepage if response is ok
    if (response.ok) {
      document.location.replace('/');
    } else {
      console.error(response.statusText);
    }
  }
};

const signupHandler = async () => {
  const name = document.querySelector('#signup-username').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
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
