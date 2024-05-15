var input = document.querySelector('.js-input');
var saveButton = document.querySelector('.js-save');
var nameSpan = document.querySelector('.js-name');

var nameObj = JSON.parse(localStorage.getItem('nameObj'));
if (nameObj) {
    nameSpan.textContent = nameObj.name;
}

saveButton.addEventListener('click', function() {
    var nameObj = { name: input.value };
    localStorage.setItem('nameObj', JSON.stringify(nameObj));
    nameSpan.textContent = nameObj.name;
});