let input = document.querySelector('.js-input');
let saveButton = document.querySelector('.js-save');
let nameSpan = document.querySelector('.js-name');

let name = Cookies.get('name');
if (name) {
    nameSpan.textContent = name;
}

saveButton.addEventListener('click', function() {
    Cookies.set('name', input.value, { expires: 3 });
    nameSpan.textContent = input.value;
});