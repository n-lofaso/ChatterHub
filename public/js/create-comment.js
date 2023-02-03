const createCommentHandler = async () => {
    const postId = document.querySelector('#post-id').value;
    const content = document.querySelector('#comment-content').value.trim();

    if (postId && content) {
        const response = await fetch(`/posts/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.error(response.statusText);
        }
    }
};

document
    .querySelector('#create-comment-button')
    .addEventListener('click', createCommentHandler);
