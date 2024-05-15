let textInput = document.getElementById('text-input');
let selectInput = document.getElementById('car-select');

let urlParams = new URLSearchParams(window.location.search);

textInput.value = urlParams.get('text') || '';
selectInput.value = urlParams.get('car_id') || '';

textInput.addEventListener('change', function() {
    urlParams.set('text', textInput.value);
    window.history.replaceState({}, '', '?' + urlParams.toString());
});

selectInput.addEventListener('change', function() {
    urlParams.set('car_id', selectInput.value);
    window.history.replaceState({}, '', '?' + urlParams.toString());
});