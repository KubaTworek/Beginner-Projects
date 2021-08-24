const minEl = document.getElementById('min');
const maxEl = document.getElementById('max');
const generateBtn = document.getElementById('generate');
const resultEl = document.getElementById('result');

generateBtn.addEventListener('click', () => {
    let min = minEl.value;
    let max = maxEl.value;
    let random = getRandom(min, max);
    resultEl.innerText = random; 
});

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};