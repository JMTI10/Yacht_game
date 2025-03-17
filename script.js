document.getElementById("rollDice").addEventListener("click", function() {
    const diceContainer = document.getElementById("diceContainer");
    diceContainer.innerHTML = ""; // Clear previous dice
    
    const diceCount = 5;
    for (let i = 0; i < diceCount; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        const dice = document.createElement("div");
        dice.classList.add("dice");
        
        const faces = ["front", "back", "left", "right", "top", "bottom"];
        faces.forEach((face, index) => {
            const faceDiv = document.createElement("div");
            faceDiv.classList.add(face);
            faceDiv.textContent = index + 1;
            dice.appendChild(faceDiv);
        });
        
        // Random position inside the table area
        dice.style.top = `${Math.random() * 50 + 20}%`;
        dice.style.left = `${Math.random() * 50 + 20}%`;
        
        // Apply 3D rotation animation
        const rotations = [
            "rotateX(0deg) rotateY(0deg)",
            "rotateX(180deg) rotateY(0deg)",
            "rotateX(0deg) rotateY(-90deg)",
            "rotateX(0deg) rotateY(90deg)",
            "rotateX(90deg) rotateY(0deg)",
            "rotateX(-90deg) rotateY(0deg)"
        ];
        dice.style.transform = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`;
        dice.style.transition = "transform 1s ease-out, top 1s ease-out, left 1s ease-out";
        
        diceContainer.appendChild(dice);
        
        setTimeout(() => {
            dice.style.transform = rotations[diceValue - 1];
        }, 100);
    }
});
