
function changeTextSize() {
    const textElement = document.getElementById('textToResize');
    textElement.style.fontSize = '20px';
}
const button = document.querySelector('#resizeButton');
button.addEventListener('click', changeTextSize);