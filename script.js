document.getElementById("rollDice").addEventListener("click", function() {
    const diceContainer = document.getElementById("diceContainer");
    diceContainer.innerHTML = ""; // Clear previous dice
    
    const diceCount = 5;
    for (let i = 0; i < diceCount; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        const dice = document.createElement("div");
        dice.classList.add("dice");
        dice.textContent = diceValue;
        
        // Random position inside the table area
        dice.style.top = `${Math.random() * 80}%`;
        dice.style.left = `${Math.random() * 80}%`;
        
        diceContainer.appendChild(dice);
    }
});
