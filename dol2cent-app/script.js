const btn = document.getElementById('button');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');
const totalValue = document.getElementById("value");
const twoFiveEl = document.getElementById("twoFive");
const tableEl = document.getElementById("table");
const tenEl = document.getElementById("ten");
const fiveEl = document.getElementById("five");
const oneEl = document.getElementById("one");

btn.addEventListener('click', () => {
    let value = inputEl.value * 100;
    if(Number.isInteger(value)) {
        totalValue.classList.remove("hidden");
        scoreEl.classList.remove("hidden");
        tableEl.classList.remove("hidden");

        totalValue.innerHTML = `
            <span>Total cents: ${value}</span>
        `;

        let twoFiveValue = Math.floor(value / 25);
        let tenValue = Math.floor((value - twoFiveValue*25) / 10);
        let fiveValue = Math.floor((value - twoFiveValue*25 - tenValue*10) / 5);
        let oneValue = Math.floor((value - twoFiveValue*25 - tenValue*10 - fiveValue*5));

        twoFiveEl.innerText = twoFiveValue;
        tenEl.innerText = tenValue;
        fiveEl.innerText = fiveValue;
        oneEl.innerText = oneValue;
    } else {
        totalValue.classList.remove("hidden");

        totalValue.innerHTML = `
            <span>This is incorrect value</span>
        `;
    }
    
})