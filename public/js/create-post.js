// Function to show the modal
const showModal = () => {
  document.querySelector('#modal').setAttribute('class', 'c-overlay c-overlay--visible')

};

const createPostHandler = async () => {
  const title = document.querySelector('#post-title').value.trim();
  const body = document.querySelector('#post-body').value.trim();
  let checkedButton = document.querySelector('input[name = "optionsRadios"]:checked');
  // let checkedButton;
  // for (let i = 0; i < radios.length; i++) {
  //   if(radios[i].checked) {
  //     checkedButton = radios[i].value;
  //     console.log(checkedButton);
  //   }
  // }

  if (title && body) {
    const response = await fetch(`/api/${checkedButton}`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/movies-and-television');
    } else {
      console.error(response.statusText);
    }
  }
};

const hideModal = () => {
  document.querySelector('#modal').setAttribute('class', 'o-modal o-modal--dismissible')
};

document.querySelector('#cancel-button').addEventListener('click', hideModal);

document.querySelector('#create-post-button').addEventListener('click', showModal);

document.querySelector('#post-button').addEventListener('click', createPostHandler);
