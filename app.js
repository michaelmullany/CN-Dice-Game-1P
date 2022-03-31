let currentScore = 0;
let diceValue = 0;
let targetScore = 20;
let illegalValue = 1;

const rollButton = document.getElementById("rollButton");
const currentScoreDisplay = document.getElementById("currentScore");
const targetScoreDisplay = document.getElementById("targetScore");

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
    currentScoreDisplay.textContent = currentScore;
    
    if (currentScore > targetScore) {
        processWin();
    }
    // Neither lost nor won: Wait for next click
});

const processLoss = () => {
    console.log("You Lost!")
};

const processWin = () => {
    console.log("You Won!")
};
