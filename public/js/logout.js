const logoutHandler = async () => {
    const response = await fetch('/users/logout', {
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