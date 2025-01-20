const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yayText = document.getElementById("yay");
const yayText1 = document.getElementById("yay1");
const can1 = document.getElementById("can1");
const can = document.getElementById("can");
const confettiContainer = document.createElement("div");
confettiContainer.classList.add("confetti");
document.body.appendChild(confettiContainer);

noBtn.addEventListener("click", () => {
    const maxButtonSize = 500; // Set a max width/height
    if (yesBtn.offsetWidth < maxButtonSize && yesBtn.offsetHeight < maxButtonSize) {
        yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
        yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;
    }
});

yesBtn.addEventListener("click", () => {
    yayText.style.display = "block";
    yayText1.style.display = "block";
    can.style.display = "none";
    can1.style.display = "none";
    generateConfetti();
});

function generateConfetti() {
    // Clear previous confetti before generating new ones
    confettiContainer.innerHTML = "";

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti-piece");
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;

        // Randomize confetti color for visual variation
        confettiPiece.style.backgroundColor = getRandomColor();

        // Remove confetti after animation
        confettiPiece.addEventListener("animationend", () => {
            confettiPiece.remove();
        });

        confettiContainer.appendChild(confettiPiece);
    }
}

function getRandomColor() {
    const colors = ["#ffeb3b", "#ff5722", "#4caf50", "#2196f3", "#e91e63"];
    return colors[Math.floor(Math.random() * colors.length)];
}
