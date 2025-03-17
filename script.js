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

        // Ensure the dice are always 3D from the start
        dice.style.transformStyle = "preserve-3d";
        dice.style.width = "50px";
        dice.style.height = "50px";
        dice.style.position = "absolute";
        dice.style.perspective = "1000px"; 

        // Set the dice's starting position above the table
        dice.style.top = "-100px";
        dice.style.opacity = "0";

        // Apply full 3D effect immediately before animation starts
        const initialRotation = `rotateX(${Math.random() * 720}deg) rotateY(${Math.random() * 720}deg) rotateZ(${Math.random() * 720}deg)`;
        dice.style.transform = initialRotation;

        diceContainer.appendChild(dice);

        setTimeout(() => {
            dice.style.transition = "transform 1.5s ease-out, top 1s ease-out, opacity 0.5s ease-in";
            dice.style.opacity = "1";
            dice.style.top = `${Math.random() * 50 + 20}%`;
            dice.style.left = `${Math.random() * 50 + 20}%`;

            // Apply continuous rolling effect while falling
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
            }, 1200); // Ensure it fully settles after rolling
        }, 10); // Delay slightly to prevent transition override
    }
});
