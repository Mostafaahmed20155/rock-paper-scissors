const rulesButton = document.getElementById('rules-btn');
const blackBackGround = document.querySelector('.black-background');
const rulesBox = document.querySelector('.rules-box');
const rulesCloseIcon = document.querySelector('.icon-close-box');
const scoreCounter = document.querySelector('.score');
const resultText = document.querySelector('.result-text');
const playAgainButton = document.querySelector('.play-again-btn');

const choicesBox = document.querySelector('.choices-box');
const pickedChoiceBox = document.querySelector('.picked-choice-box');

const userRock = document.querySelector('.rock');
const userPaper = document.querySelector('.paper');
const userScissors = document.querySelector('.scissors');

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissors');

const userChoiceUI = document.querySelector('.user-choice');
const computerChoiceUI = document.querySelector('.computer-choice');

const userChoiceID = document.getElementById('user-choice-id');
const computerChoiceID = document.getElementById('computer-choice-id');

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'YOU WIN';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let score = 0;
let userChoice = 'rock';


const ROCK_VALUE = 'rock';
const PAPER_VALUE = 'paper';
const SCISSORS_VALUE = 'scissors';

scoreCounter.innerHTML = score;

const getComputerChoice = () => {
    let random =  Math.floor(Math.random() * 3)
    let choices = [ROCK_VALUE, PAPER_VALUE, SCISSORS_VALUE];
    let computerChoice = choices[random];
    console.log(computerChoice);
    return computerChoice;
}

const controlChoice = (userChoiceClass, userChoice, computerChoiceClass, computerChoice) => {
    choicesBox.classList.add('invisible');
    pickedChoiceBox.classList.remove('invisible');
    userChoiceUI.classList.remove('scissors-chosen');
    userChoiceUI.classList.add(userChoiceClass);
    userChoiceID.src= `images/icon-${userChoice}.svg`;
    computerChoiceUI.classList.remove('scissors-chosen');
    computerChoiceUI.classList.add(computerChoiceClass);
    computerChoiceID.src= `images/icon-${computerChoice}.svg`;
}

const reset = () => {
    choicesBox.classList.remove('invisible');
    pickedChoiceBox.classList.add('invisible');
    getComputerChoice();
}


//PAPER PART 
const setPaperOption = () => {
    userChoice = PAPER_VALUE;
    computerChoice = getComputerChoice();
    controlChoice(`${userChoice}-chosen`,userChoice, `${computerChoice}-chosen`, computerChoice);
    let result = gameLogic(computerChoice, userChoice,);
    console.log(result)
    if(result === RESULT_PLAYER_WINS) {
        score++;
        scoreCounter.innerHTML = score;
    }
    resultText.textContent= result;
    playAgainButton.addEventListener('click', reset)
}

//ROCK PART
const setRockOption = () => {
    userChoice = ROCK_VALUE;
    computerChoice = getComputerChoice();
    controlChoice(`${userChoice}-chosen`,userChoice, `${computerChoice}-chosen`, computerChoice);
    let result = gameLogic(computerChoice, userChoice);
    console.log(result)
    if(result === RESULT_PLAYER_WINS) {
        score++;
        scoreCounter.innerHTML = score;
    }
    resultText.textContent= result;
    playAgainButton.addEventListener('click', reset)
}

//SCISSORS PART
const setScissorsOption = () => {
    userChoice = SCISSORS_VALUE;
    computerChoice = getComputerChoice();
    controlChoice(`${userChoice}-chosen`,userChoice, `${computerChoice}-chosen`, computerChoice);
    let result = gameLogic(computerChoice, userChoice);
    console.log(result)
    if(result === RESULT_PLAYER_WINS) {
        score++;
        scoreCounter.innerHTML = score;
    }
    resultText.textContent= result;
    playAgainButton.addEventListener('click', reset)
}



//GAME LOGIC
const gameLogic = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK_VALUE && pChoice === PAPER_VALUE) ||
      (cChoice === PAPER_VALUE && pChoice === SCISSORS_VALUE) ||
      (cChoice === SCISSORS_VALUE && pChoice === ROCK_VALUE)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;


//RULES PART
function toggleBackground() {
    blackBackGround.classList.remove('visible');
    rulesBox.classList.remove('visible');
}

function showRulesBox() {
    blackBackGround.classList.add('visible');
    rulesBox.classList.add('visible');
    rulesCloseIcon.addEventListener('click', function () {
        rulesBox.classList.toggle('visible');
        toggleBackground();
    })
}
//--------------------------------------------


//EVENT LISTENERS
rulesButton.addEventListener('click', showRulesBox)
blackBackGround.addEventListener('click', toggleBackground)
userPaper.addEventListener('click', setPaperOption)
userRock.addEventListener('click', setRockOption)
userScissors.addEventListener('click', setScissorsOption)