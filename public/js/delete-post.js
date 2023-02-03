const deletePostHandler = async (postId) => {
    const response = await fetch(`/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Redirect or show a success message
        document.location.replace('/homepage');
    } else {
        console.error(response.statusText);
    }
};

// Attach an event listener to the delete button for each post
const deleteButtons = document.querySelectorAll('.delete-post-button');
deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const postId = button.dataset.postId;
        deletePostHandler(postId);
    });
});
