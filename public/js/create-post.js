// Function to show the modal
const showModal = () => {
  document.querySelector('#modal').setAttribute('class', 'c-overlay c-overlay--visible')

};

const createPostHandler = async () => {
  const title = document.querySelector('#post-title').value.trim();
  const description = document.querySelector('#post-body').value.trim();
  const interests_id = document.querySelector('#route').value.trim();


  if (title && description) {
    const response = await fetch(`/api/${interests_id}`, {
      method: 'POST',
      body: JSON.stringify({ title, description, interests_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
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

function getvalue() {
  window.event.target.setAttribute('id', 'route');
}