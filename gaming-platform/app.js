// elements
const gameBoard = document.getElementById('game-board');
const winnerBoard = document.getElementById('winner-board');
const turnBoard = document.getElementById('turn-board');
const thingsToChoose = document.getElementById('things-to-choose');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
//spans
const winner = document.getElementById('winner-board__title');
//buttons
const startGameBtn = document.getElementById('start-button');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');


// MAKING GAME

//variables
let isTied = false;
let isComputer = false;
let isPlayer = false;
let isFinished = false;

//buttons
startGameBtn.addEventListener('click', startGame);
rockBtn.addEventListener('click', addItem);
paperBtn.addEventListener('click', addItem);
scissorsBtn.addEventListener('click', addItem);

//main functions
