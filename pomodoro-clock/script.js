const breakEl = document.getElementById('break-count');
const sessionEl = document.getElementById('session-count');
const breakUp = document.getElementById('break-up');
const breakDown = document.getElementById('break-down');
const sessionUp = document.getElementById('session-up');
const sessionDown = document.getElementById('session-down');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause'); 
const restartBtn = document.getElementById('restart');
const timeEl = document.getElementById('time');

let breakTime = breakEl.innerText;
let sessionTime = sessionEl.innerText;
let isPause = false;


breakUp.addEventListener('click', () => {
    breakTime++;
    breakEl.innerText = breakTime;
});

breakDown.addEventListener('click', () => {
    if(breakTime != 1) {
        breakTime--;
        breakEl.innerText = breakTime;
    }
});

sessionUp.addEventListener('click', () => {
    sessionTime++;
    sessionEl.innerText = sessionTime;
    minsEl.innerText = sessionTime;
});

sessionDown.addEventListener('click', () => {
    if(sessionTime != 1) {
        sessionTime--;
        sessionEl.innerText = sessionTime;
        minsEl.innerText = sessionTime;
    }
});

playBtn.addEventListener('click', () => {
    let mins = minsEl.innerText;
    let secs = 60;
    mins--;
    let count = setInterval(function(){
        if(!isPause){
            secs--;
            secsEl.innerText = secs;
            minsEl.innerText = mins;
            if(secs < 10) {
                secsEl.innerText = '0' + secs;
            }
            if(secs == 0) {
                secs = 59;
                mins--;
                secsEl.innerText = secs;
                minsEl.innerText = mins;
            }
            if(mins < 0 && timeEl.innerText === "Session") {
                secsEl.innerText = "00";
                minsEl.innerText = breakTime;
                timeEl.innerText = "Break";
                clearInterval(count);
            } else if(mins < 0 && timeEl.innerText === "Break") {
                secsEl.innerText = "00";
                minsEl.innerText = sessionTime;
                timeEl.innerText = "Session";
                clearInterval(count);
            }
        }
    }, 1000)   
});

pauseBtn.addEventListener('click', () => {
    if(!isPause){
        isPause = true;
    } else {
        isPause = false;
    }
});

restartBtn.addEventListener('click', () => {
    window.location.reload(true);
});