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

        // Ensure dice are fully 3D before rendering
        dice.style.transformStyle = "preserve-3d";
        dice.style.width = "50px";
        dice.style.height = "50px";
        dice.style.position = "absolute";

        // Set dice's starting position above the table
        dice.style.top = "-100px";
        dice.style.opacity = "0";
        dice.style.display = "none"; // Hide until ready

        // Pre-set a strong 3D transformation before showing the dice
        const initialRotation = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateZ(${Math.random() * 360}deg)`;
        dice.style.transform = initialRotation;

        diceContainer.appendChild(dice);

        // Ensure the browser fully processes the 3D cube before showing it
        requestAnimationFrame(() => {
            setTimeout(() => {
                dice.style.display = "flex"; // Now it's fully 3D, show it
                dice.style.transition = "transform 1.5s ease-out, top 1s ease-out, opacity 0.5s ease-in";
                dice.style.opacity = "1";
                dice.style.top = `${Math.random() * 50 + 20}%`;
                dice.style.left = `${Math.random() * 50 + 20}%`;

                // Apply rolling effect while falling
                dice.style.transform = `rotateX(${Math.random() * 1440}deg) rotateY(${Math.random() * 1440}deg) rotateZ(${Math.random() * 1440}deg)`;

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
            }, 50); // Slight delay to allow full 3D processing before animation
        });
    }
});
