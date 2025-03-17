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
        
        // Set initial position above the table and make dice invisible
        dice.style.top = "-100px";
        dice.style.opacity = "0";
        dice.style.transform = `rotateX(${Math.random() * 720}deg) rotateY(${Math.random() * 720}deg)`;
        
        diceContainer.appendChild(dice);
        
        setTimeout(() => {
            dice.style.transition = "transform 1.5s ease-out, top 1s ease-out, opacity 0.5s ease-in";
            dice.style.opacity = "1";
            dice.style.top = `${Math.random() * 50 + 20}%`;
            dice.style.left = `${Math.random() * 50 + 20}%`;
            
            // Apply continuous rolling effect while falling
            dice.style.transform = `rotateX(${Math.random() * 1440}deg) rotateY(${Math.random() * 1440}deg)`;
            
            setTimeout(() => {
                // Final position and rotation
                const rotations = [
                    "rotateX(0deg) rotateY(0deg)",
                    "rotateX(180deg) rotateY(0deg)",
                    "rotateX(0deg) rotateY(-90deg)",
                    "rotateX(0deg) rotateY(90deg)",
                    "rotateX(90deg) rotateY(0deg)",
                    "rotateX(-90deg) rotateY(0deg)"
                ];
                dice.style.transform = rotations[diceValue - 1];
            }, 1200); // Ensure it fully settles after rolling
        }, 100);
    }
});
