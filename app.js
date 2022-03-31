let currentScore = 0;
let diceValue = 0;
let targetScore = 20;
let illegalValue = 1;

const rollButton = document.getElementById("rollButton");
const currentScoreDisplay = document.getElementById("currentScore");
const targetScoreDisplay = document.getElementById("targetScore");
const instructionText = document.getElementById("instruction");

// Set a variable for the target score so it can be changed easily
targetScoreDisplay.textContent = targetScore;

rollButton.addEventListener("click", () => {
    diceValue = Math.ceil(Math.random() * 6);
    console.log(`You rolled ${diceValue}`);
    
    //Only add score if it does not cause a loss
    if (diceValue == illegalValue) {
        processLoss();
        return;
    }

    currentScore += diceValue;
    updateScoreDisplay();
    
    if (currentScore >= targetScore) {
        processWin();
        return;
    }
    
    instructionText.textContent = `Keep rolling to reach ${targetScore}`;
});

const updateScoreDisplay = () => {
    currentScoreDisplay.textContent = currentScore;
};

const processLoss = () => {
    currentScore = 0;
    updateScoreDisplay();
    instructionText.textContent = "You Lost! Roll the dice to start a new game.";
};

const processWin = () => {
    currentScore = 0;
    instructionText.textContent = "You Win! Roll the dice to start a new game.";
};
