function createDice(container) {
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
    dice.style.willChange = "transform, opacity";
    dice.style.width = "50px";
    dice.style.height = "50px";
    dice.style.position = "absolute";
    dice.style.top = "-100px";
    dice.style.opacity = "1";

    // Set a 3D rotation before movement starts
    const initialRotation = `rotateX(${Math.random() * 45}deg) rotateY(${Math.random() * 45}deg) rotateZ(${Math.random() * 45}deg)`;
    dice.style.transform = initialRotation;

    container.appendChild(dice);

    // Apply FORCE 3D Rendering in JavaScript
    requestAnimationFrame(() => {
        dice.style.transformStyle = "preserve-3d";
    });

    // Start rolling animation
    rollDice(dice, diceValue);
}
