const oneEl = document.getElementById('one');
const twoEl = document.getElementById('two');
const threeEl = document.getElementById('three');
const fourEl = document.getElementById('four');
const fiveEl = document.getElementById('five');
const sixEl = document.getElementById('six');
const sevenEl = document.getElementById('seven');
const eightEl = document.getElementById('eight');
const nineEl = document.getElementById('nine');

let playerOneTurn = true;


oneEl.addEventListener('click', () => {
    if(!oneEl.textContent) {
        oneEl.classList.add('check')
        if(playerOneTurn) {
            oneEl.textContent = 'X';
            playerOneTurn = false;
        } else {
            oneEl.textContent = 'O';
            playerOneTurn = true;
        }
        setTimeout(checkWin, 1000);
    }
});

twoEl.addEventListener('click', () => {
    if(!twoEl.textContent) {
        twoEl.classList.add('check')
        if(playerOneTurn) {
            twoEl.textContent = 'X';
            playerOneTurn = false;
        } else {
            twoEl.textContent = 'O';
            playerOneTurn = true;
        }
        setTimeout(checkWin, 1000);
    }
});

threeEl.addEventListener('click', () => {
    if(!threeEl.textContent) {
        threeEl.classList.add('check')
        if(playerOneTurn) {
            threeEl.textContent = 'X';
            playerOneTurn = false;
        } else {
            threeEl.textContent = 'O';
            playerOneTurn = true;
        }
        setTimeout(checkWin, 1000);
    }
});

fourEl.addEventListener('click', () => {
    if(!fourEl.textContent) {
        fourEl.classList.add('check')
        if(playerOneTurn) {
            fourEl.textContent = 'X';
            playerOneTurn = false;
        } else {
            fourEl.textContent = 'O';
            playerOneTurn = true;
        }
        setTimeout(checkWin, 1000);
    }
});

fiveEl.addEventListener('click', () => {
    if(!fiveEl.textContent) {
        fiveEl.classList.add('check')
        if(playerOneTurn) {
            fiveEl.textContent = 'X';
            playerOneTurn = false;
        } else {
            fiveEl.textContent = 'O';
            playerOneTurn = true;
        }
        setTimeout(checkWin, 1000);
    }
});

sixEl.addEventListener('click', () => {
    if(!sixEl.textContent) {
        sixEl.classList.add('check')
        if(playerOneTurn) {
            sixEl.textContent = 'X';
            playerOneTurn = false;
        } else {
            sixEl.textContent = 'O';
            playerOneTurn = true;
        }
        setTimeout(checkWin, 1000);
    }
});

sevenEl.addEventListener('click', () => {
    if(!sevenEl.textContent) {
        sevenEl.classList.add('check')
        if(playerOneTurn) {
            sevenEl.textContent = 'X';
            playerOneTurn = false;
        } else {
            sevenEl.textContent = 'O';
            playerOneTurn = true;
        }
        setTimeout(checkWin, 1000);
    }
});

eightEl.addEventListener('click', () => {
    if(!eightEl.textContent) {
        eightEl.classList.add('check')
        if(playerOneTurn) {
            eightEl.textContent = 'X';
            playerOneTurn = false;
        } else {
            eightEl.textContent = 'O';
            playerOneTurn = true;
        }
        setTimeout(checkWin, 1000);
    }
});

nineEl.addEventListener('click', () => {
    if(!nineEl.textContent) {
            nineEl.classList.add('check')
        if(playerOneTurn) {
            nineEl.textContent = 'X';
            playerOneTurn = false;
        } else {
            nineEl.textContent = 'O';
            playerOneTurn = true;
        }
        setTimeout(checkWin, 1000);
    }
});

function checkWin() {
    let one = oneEl.textContent;
    let two = twoEl.textContent;
    let three = threeEl.textContent;
    let four = fourEl.textContent;
    let five = fiveEl.textContent;
    let six = sixEl.textContent;
    let seven = sevenEl.textContent;
    let eight = eightEl.textContent;
    let nine = nineEl.textContent;
    if(one == two && one == three && one) {
        whoWon();
        restartGame();
    }
    if(four == five && four == six && four) {
        whoWon();
        restartGame();
    }
    if(seven == eight && seven == nine && seven) {
        whoWon();
        restartGame();
    }
    if(one == four && one == seven && one) {
        whoWon();
        restartGame();
    }
    if(two == five && two == eight && two) {
        whoWon();
        restartGame();
    }
    if(three == six && three == nine && three) {
        whoWon();
        restartGame();
    }
    if(one == five && one == nine && one) {
        whoWon();
        restartGame();
    }
    if(three == five && three == seven && three) {
        whoWon();
        restartGame();
    }
}

function whoWon() {
    if(playerOneTurn) {
        alert("Player 2 won!")
    } else {
        alert("Player 1 won!")
    }
}

function restartGame() {
    document.querySelectorAll('.place').forEach((element) => {
        element.classList.remove('check');
        element.textContent = "";
        playerOneTurn = true;
    })
}