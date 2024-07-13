document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCountElement = button.nextElementSibling;
            let likeCount = parseInt(likeCountElement.textContent);
            likeCountElement.textContent = `${++likeCount} like(s)`;
        });
    });
});
