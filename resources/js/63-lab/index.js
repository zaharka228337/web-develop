let list = document.querySelector('.js-list');

fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(data => {
        // Перебираем полученные данные
        data.forEach(post => {
            // Создаем элемент списка
            let listItem = document.createElement('li');
            // Задаем его содержимое
            listItem.textContent = post.title;
            // Добавляем его в список
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error(error));