var input = document.querySelector('.js-input');
var saveButton = document.querySelector('.js-save');
var nameSpan = document.querySelector('.js-name');

var name = Cookies.get('name');
if (name) {
    nameSpan.textContent = name;
}

saveButton.addEventListener('click', function() {
    Cookies.set('name', input.value, { expires: 3 });
    nameSpan.textContent = input.value;
});