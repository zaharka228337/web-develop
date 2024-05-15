let input = document.querySelector('.js-input');
let saveButton = document.querySelector('.js-save');
let nameSpan = document.querySelector('.js-name');

let nameObj = JSON.parse(localStorage.getItem('nameObj'));
if (nameObj) {
    nameSpan.textContent = nameObj.name;
}

saveButton.addEventListener('click', function() {
    let nameObj = { name: input.value };
    localStorage.setItem('nameObj', JSON.stringify(nameObj));
    nameSpan.textContent = nameObj.name;
});