const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const yayText = document.getElementById("yay");
const yayText1 = document.getElementById("yay1");
const can1 = document.getElementById("can1");
const can = document.getElementById("can");
const confettiContainer = document.createElement('div');
confettiContainer.classList.add("confetti");
document.body.appendChild(confettiContainer);

noBtn.addEventListener("click", () => {
    yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
    yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;
});

yesBtn.addEventListener("click", () => {
    yayText.style.display = "block";
    yayText1.style.display = "block";
    can.style.display = "none";
    can1.style.display = "none";
    generateConfetti();
});

function generateConfetti() {
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti-piece");
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}
