document.getElementById("rollDice").addEventListener("click", function() {
    const diceContainer = document.getElementById("diceContainer");
    diceContainer.innerHTML = ""; // Clear previous dice
    rollAllDice(diceContainer, 5); // Calls function from diceroller.js
});
