document.getElementById("rollDice").addEventListener("click", function() {
    console.log("Roll button clicked!"); // Debugging log
    const diceContainer = document.getElementById("diceContainer");
    diceContainer.innerHTML = ""; // Clear previous dice
    rollAllDice(diceContainer, 5);
});
