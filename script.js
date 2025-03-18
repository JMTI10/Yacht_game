document.getElementById("rollDice").addEventListener("click", function() {
    const diceContainer = document.getElementById("diceContainer");
    diceContainer.innerHTML = ""; // Clear previous dice

    const diceCount = 5;

    for (let i = 0; i < diceCount; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        const dice = document.createElement("div");
        dice.classList.add("dice");
        dice.setAttribute("draggable", "true"); // Make dice draggable

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
        dice.style.opacity = "1"; // Ensure visibility

        // Set an initial 3D rotation
        const initialRotation = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateZ(${Math.random() * 360}deg)`;
        dice.style.transform = initialRotation;

        diceContainer.appendChild(dice);

        // Generate a position inside the table
        let topPosition = Math.random() * (diceContainer.clientHeight - 60);
        let leftPosition = Math.random() * (diceContainer.clientWidth - 60);

        // Convert to px for accurate dragging
        dice.style.top = `${topPosition}px`;
        dice.style.left = `${leftPosition}px`;

        // Animate the dice falling and rolling
        requestAnimationFrame(() => {
            dice.style.transition = "transform 1.5s ease-out, top 1s ease-out, left 1s ease-out";
            dice.style.top = `${topPosition}px`;
            dice.style.left = `${leftPosition}px`;

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

                // Enable dragging after the dice have landed
                enableDrag(dice);
            }, 1500); // Ensure it fully settles after rolling
        });
    }
});

// Function to enable dragging
function enableDrag(dice) {
    let offsetX, offsetY, isDragging = false;

    dice.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - dice.getBoundingClientRect().left;
        offsetY = e.clientY - dice.getBoundingClientRect().top;
        dice.style.transition = "none"; // Disable transition while dragging
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const container = document.getElementById("diceContainer");

            // Ensure dice stay within bounds
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            let containerRect = container.getBoundingClientRect();
            let diceRect = dice.getBoundingClientRect();

            // Prevent dragging outside the container
            if (newX < containerRect.left) newX = containerRect.left;
            if (newX + diceRect.width > containerRect.right) newX = containerRect.right - diceRect.width;
            if (newY < containerRect.top) newY = containerRect.top;
            if (newY + diceRect.height > containerRect.bottom) newY = containerRect.bottom - diceRect.height;

            dice.style.left = `${newX - containerRect.left}px`;
            dice.style.top = `${newY - containerRect.top}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        dice.style.transition = "transform 0.2s ease-out"; // Re-enable smooth transitions
    });
}
