const deleteCommentHandler = async (event) => {
    event.preventDefault();
    const commentId = event.target.dataset.commentId;

    if (commentId) {
        const response = await fetch(`/comments/${commentId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.error(response.statusText);
        }
    }
};

document.querySelectorAll('.delete-comment-button').forEach((button) => {
    button.addEventListener('click', deleteCommentHandler);
});
