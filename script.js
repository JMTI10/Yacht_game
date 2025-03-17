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
        dice.style.top = `${Math.random() * 50 + 20}%`;
        dice.style.left = `${Math.random() * 50 + 20}%`;
        
        // Apply 3D rotation animation
        dice.style.transform = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`;
        dice.style.transition = "transform 1s ease-out, top 1s ease-out, left 1s ease-out";
        
        diceContainer.appendChild(dice);
        
        setTimeout(() => {
            dice.style.transform = "rotateX(0deg) rotateY(0deg)";
        }, 100);
    }
});
