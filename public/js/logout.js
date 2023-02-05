const logoutHandler = async (e) => {
  e.preventDefault();
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      console.error(response.statusText);
    }
  };
  
  document.querySelector('#logout-button').addEventListener('click', logoutHandler);