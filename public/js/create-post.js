// Function to show the modal
const showModal = () => {
  const modal = document.querySelector('#modal');

};

const createPostHandler = async () => {
  const title = document.querySelector('#post-title').value.trim();
  const body = document.querySelector('#post-body').value.trim();

  if (title && body) {
    const response = await fetch('/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/posts');
    } else {
      console.error(response.statusText);
    }
  }
};

document
  .querySelector('#create-post-button')
  .addEventListener('click', showModal);
