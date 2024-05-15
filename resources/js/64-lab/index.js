let list = document.querySelector('.js-list');
let messageList = document.querySelector('.js-message');
let loader = document.querySelector('.loader');
let message = document.querySelector('.message');

fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            let listItem = document.createElement('li');
            listItem.textContent = post.title;
            listItem.dataset.postId = post.id;
            listItem.addEventListener('click', function() {
                loader.classList.remove('loader--hide');
                message.classList.add('message--hide');
                messageList.innerHTML = '';
                fetchComments(this.dataset.postId);
            });
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error(error));

function fetchComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            comments.forEach(comment => {
                let commentItem = document.createElement('li');
                commentItem.textContent = comment.body;
                commentItem.classList.add('message__item');
                messageList.appendChild(commentItem);
            });
            message.classList.remove('message--hide');
        })
        .catch(error => console.error(error))
        .finally(() => {
            loader.classList.add('loader--hide');
        });
}