let textInput = document.getElementById('text-input');
let selectInput = document.getElementById('car-select');

let urlParams = new URLSearchParams(window.location.hash.slice(1));

textInput.value = urlParams.get('text') || '';
selectInput.value = urlParams.get('car_id') || '';

textInput.addEventListener('change', function() {
    urlParams.set('text', textInput.value);
    window.location.hash = urlParams.toString();
});

selectInput.addEventListener('change', function() {
    urlParams.set('car_id', selectInput.value);
    window.location.hash = urlParams.toString();
});