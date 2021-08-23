const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');
const msEl = document.getElementById('ms');
const startBtn = document.getElementById('start');
const lapBtn = document.getElementById('lap');
const stopBtn = document.getElementById('stop');
const lapsEl = document.getElementById('laps')
let turn = false;

startBtn.addEventListener('click', () => {
    turn = true;
    let ms = 0;
    let secs = 0;
    let mins = 0;
    let count = setInterval(function(){
        if(turn){
            ms++;
            if(ms<10){
                msEl.innerText = '0' + ms;
            } else if(ms>99) {
                ms = 0;
                secs++;
                if(secs<10) {
                    secsEl.innerText = '0' + secs + ':';
                } else if(secs>59) {
                    secs = 0;
                    secsEl.innerText = '0' + secs + ':';
                    mins++;
                    if(mins<10) {
                        minsEl.innerText = '0' + mins + ':';
                    } else if(mins>59) {
                        mins = 0;
                        minsEl.innerText = '0' + mins + ':';
                    } else {
                        minsEl.innerText = mins + ':';
                    }
                } else {
                    secsEl.innerText = secs + ':';
                }
                msEl.innerText = '0' + ms;
            } else {
                msEl.innerText = ms;
            }         
        } else {
            clearInterval(count);
        }
    }, 10)
});

stopBtn.addEventListener('click', () => {
    turn = false;
    msEl.innerText = '00';
    secsEl.innerText = '00:';
    minsEl.innerText = '00:';
    const laps = document.querySelectorAll(".lap");
    for(let i=0; i<laps.length;i++){
        laps[i].remove();
    }
});

lapBtn.addEventListener('click', () => {
    let lapTime = minsEl.innerText+secsEl.innerText+msEl.innerText;
    const lap = document.createElement("div");
    lap.classList.add("lap");

    lap.innerHTML = `
        <span>${lapTime}</span>
    `;

    document.body.appendChild(lap);
});