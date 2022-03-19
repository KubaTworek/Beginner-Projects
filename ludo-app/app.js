let nameBox = [];
let redTurn = true;
let blueTurn = false;
let greenTurn = false;
let yellowTurn = false;
let canRoll = false;
let movePause = false;
let isMade = false;
let isRedActive = false;
let redPawnsActive = 0;


class Pawn {
    redNumber = 0;
    blueNumber = 0;
    greenNumber = 1;
    yellowNumber = 1;

    constructor(color, number){
        this.number = number,
        this.color = color;
        if(color=='red'){
            this.place = 31;
        } else if(color=='blue'){
            this.place = 1;
        } else if(color=='green'){
            this.place = 11;
        } else{
            this.place = 21;
        }
    }

    render() {
        const pawn = document.createElement('div');
        pawn.classList.add("pawn");
        pawn.classList.add(this.color);
        pawn.textContent = this.number;
        nameBox[this.place].appendChild(pawn);
    }

    movePawn(moveLength){
        nameBox[this.place].removeChild(nameBox[this.place].children[0]);
        this.place += moveLength;
        if(this.place > 40){
        this.place -= 40;
        }
    }
}

const redPawn1 = new Pawn('red', 1);
const redPawn2 = new Pawn('red', 2);
const redPawn3 = new Pawn('red', 3);
const redPawn4 = new Pawn('red', 4);

const startGameBtn = document.getElementById('start-button');
const diceBtn = document.getElementById('dice-button');
const diceNumber = document.getElementById('dice-number');
for(let i = 1; i < 41; i++){   
    nameBox[i] = document.getElementById(i);
}


startGameBtn.addEventListener('click', startGame);

diceBtn.addEventListener('click', rollDice);

function rollDice() {
    if(canRoll){
        let diceValue = Math.floor(Math.random()*6+1);
        diceNumber.textContent = diceValue;
        isMade = false;
        if(diceValue == 1 || diceValue == 6){
            isMade = askForCreateNewPawn();
        }
        if(isRedActive && !isMade){        
            let moveLength = Number(diceNumber.textContent);
            let unchosen = true; 
            while(unchosen){
                choose = prompt("Chose your Pawn 1/2/3/4");
                eval(`redPawn${choose}.movePawn(moveLength)`);
                eval(`redPawn${choose}.render()`);
                unchosen = false;
            }
            
        }
    }
}

function startGame() {
    canRoll = true;
}

function movePawnGlobal(e) {
    e.movePawn(moveLength)
}

function askForCreateNewPawn(){
    if(confirm("Do you want to new Pawn?")){
        if(redPawnsActive < 4){
            eval(`redPawn${redPawnsActive+1}.render()`)
            redPawnsActive += 1;
            isRedActive = true;
            return true;
        }
    } else {
        return false;
    }
}
