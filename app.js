let currentScore = 0;
let diceValue = 0;
let targetScore = 20;

const rollButton = document.getElementById("rollButton");
const currentScoreDisplay = document.getElementById("currentScore");

rollButton.addEventListener("click", () => {
    diceValue = Math.ceil(Math.random() * 6);
    currentScore += diceValue; 
    currentScoreDisplay.textContent = currentScore;
});