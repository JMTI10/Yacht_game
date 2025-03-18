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

        // Ensure dice are fully in 3D from the start
        dice.style.transformStyle = "preserve-3d";
        dice.style.width = "50px";
        dice.style.height = "50px";
        dice.style.position = "absolute";
        dice.style.top = "-100px"; // Start above the table
        dice.style.opacity = "1"; // Ensure dice are visible immediately

        // Set an initial 3D rotation to avoid 2D appearance
        const initialRotation = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateZ(${Math.random() * 360}deg)`;
        dice.style.transform = initialRotation;

        diceContainer.appendChild(dice);

        // Animate the dice falling and rolling
        requestAnimationFrame(() => {
            dice.style.transition = "transform 1.5s ease-out, top 1s ease-out";
            dice.style.top = `${Math.random() * 50 + 20}%`;
            dice.style.left = `${Math.random() * 50 + 20}%`;

            // Apply rolling effect while falling
            const rollingRotation = `rotateX(${Math.random() * 1440}deg) rotateY(${Math.random() * 1440}deg) rotateZ(${Math.random() * 1440}deg)`;
            dice.style.transform = rollingRotation;

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
            }, 1500); // Ensure it fully settles after rolling
        });
    }
});

document.getElementById("rollDice").addEventListener("click", function() {
    const diceContainer = document.getElementById("diceContainer");
    console.log("Dice container found:", !!diceContainer); // Check if it exists
    diceContainer.innerHTML = ""; // Clear previous dice

    const testDice = document.createElement("div");
    testDice.textContent = "TEST DICE"; // Simple text test
    testDice.style.width = "100px";
    testDice.style.height = "100px";
    testDice.style.background = "red";
    diceContainer.appendChild(testDice);
});

