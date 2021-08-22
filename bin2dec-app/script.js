const inputEl = document.getElementById('input');
const displayEl = document.getElementById('display');
const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    displayEl.value = '';
    const value = inputEl.value;
    String(value);
    if(value === '') return alert('Please, enter a binary number');
    for(let i=0; i<value.length; i++) {
        if(value[i] != '0' && value[i] != '1') return alert('Please, enter a binary number');
    }
    const newValue = convert(value);
    displayEl.value = newValue;
});

function convert(binary) {
    let decimal = 0;
    for(let i=0; i<binary.length; i++) {
        let a = Number(binary[i]) * Math.pow(2,binary.length-i-1);
        decimal += a;
    }

    return decimal;
}
