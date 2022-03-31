let currentScore = 0;
let diceValue = 0;
let targetScore = 20;
let illegalValue = 1;

const rollButton = document.getElementById("rollButton");
const currentScoreDisplay = document.getElementById("scoreDisplay");
const targetScoreDisplay = document.getElementById("targetScore");
const diceImage = document.getElementById("diceImage");
const instructionText = document.getElementById("instruction");
const body = document.getElementsByTagName("body")[0];

rollButton.addEventListener("click", () => {

    rollDice();
    
    //Only add score if it does not cause a loss
    if (diceValue == illegalValue) {
        processLoss();
        return;
    }

    increaseScore();
    
    if (currentScore >= targetScore) {
        processWin();
        return;
    }
    
    instructionText.textContent = `Keep rolling to reach ${targetScore}`;
});

const rollDice = () => {
    rollButton.textContent = "Roll the Dice";
    body.classList.remove("win","lose");
    diceValue = Math.ceil(Math.random() * 6);
    setDiceImage();
}

const increaseScore = () => {
    currentScore += diceValue;
    updateScoreDisplay();
}

const updateScoreDisplay = () => {
    currentScoreDisplay.textContent = currentScore;
};

const processLoss = () => {
    body.classList.add("lose");
    currentScore = 0;
    rollButton.textContent = "Roll to Start Again";
    instructionText.textContent = "You Lost! Roll the dice to start a new game.";
};

const processWin = () => {
    body.classList.add("win");
    currentScore = 0;
    rollButton.textContent = "Roll to Start Again";
    instructionText.textContent = "You Win! Roll the dice to start a new game.";
};

const setDiceImage = () => {
    diceImage.style.display = "inline";
    diceImage.src=`img/dice${diceValue}.png`; 
}