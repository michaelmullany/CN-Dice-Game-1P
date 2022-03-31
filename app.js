let currentScore = 0;
const targetScore = 20;
const illegalValue = 1;
let diceValue = 0;

const rollButton = document.getElementById("rollButton");

rollButton.addEventListener("click", () => {
    diceValue = Math.ceil(Math.random() * 6);
    console.log(`Dice Value: ${diceValue}`);
});