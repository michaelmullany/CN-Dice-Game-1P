let currentScore = 0;
let diceValue = 0;
let targetScore = 20;
let illegalValue = 1;
let gameOver = false;

const rollButton = document.getElementById("rollButton");
const currentScoreDisplay = document.getElementById("scoreDisplay");
const scoreSummaryText = document.getElementById("scoreSummary");
const scoreSection = document.getElementById("scoreSection");
const diceImage = document.getElementById("diceImage");
const instructionText = document.getElementById("instruction");
const body = document.getElementsByTagName("body")[0];
const diceRollSFX = document.getElementsByTagName("audio")[0];

rollButton.addEventListener("click", () => {

    scoreSection.style.display = "inline";

    if (gameOver) {
        resetDisplay();
    }

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
    playDiceAudio();
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
    instructionText.textContent = "You Lost! Roll the dice to start a new game.";
    scoreSummaryText.textContent = "YOU LOSE"
    rollButton.textContent = "Roll to Start Again";
    currentScore = 0;
    gameOver = true;
};

const processWin = () => {
    body.classList.add("win");
    instructionText.textContent = "You Win! Roll the dice to start a new game.";
    scoreSummaryText.textContent = "YOU WIN"
    rollButton.textContent = "Roll to Start Again";
    currentScore = 0;
    gameOver = true;
};

const setDiceImage = () => {
    diceImage.style.display = "inline";
    diceImage.src=`img/dice${diceValue}.png`; 
}

const playDiceAudio = () => {
    diceRollSFX.pause();
    diceRollSFX.currentTime = 0;
    diceRollSFX.play();
}
const resetDisplay = () => {
    gameOver = false;
    updateScoreDisplay();
    scoreSummaryText.textContent = "Current Score";
    rollButton.textContent = "Roll the Dice";
    body.classList.remove("win", "lose");
}

