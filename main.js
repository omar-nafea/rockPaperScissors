const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

var win = document.getElementById("winning");
var lose = document.getElementById("losting");

function playAudio() {
    win.play();
}

function Oflosing() {
    lose.play();
}

possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.currentTarget.id;
        userchoisphoto = e.currentTarget.innerHTML;
        userChoiceDisplay.innerHTML = userchoisphoto;
        generateComputerChoice();
        getResult();
    })
);

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1; 

    if (randomNumber === 1) {
        computerChoice = "rock";
        computerChoiceDisplay.innerHTML =
            "<img src='rock-ft-1.jpg' width='200px' height='200px'>";
    }
    if (randomNumber === 2) {
        computerChoice = "scissors";
        computerChoiceDisplay.innerHTML =
            "<img src='scissor-ft-1.jpg' width='200px' height='200px'>";
    }
    if (randomNumber === 3) {
        computerChoice = "paper";
        computerChoiceDisplay.innerHTML =
            "<img src='paper-ft-1.jpg' width='200px' height='200px'>";
    }
    if (randomNumber === 4) {
        computerChoice = "rock";
        computerChoiceDisplay.innerHTML =
            "<img src='rock-ft-1.jpg' width='200px' height='200px'>";
    }
    if (randomNumber === 5) {
        computerChoice = "paper";
        computerChoiceDisplay.innerHTML =
            "<img src='paper-ft-1.jpg' width='200px' height='200px'>";
    }
}

const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
        closeModal(modal);
    });
    const mobils = document.querySelectorAll(".mobil.active");
    mobils.forEach((mobil) => {
        closeModal(mobil);
    });
    const monirs = document.querySelectorAll(".monir.active");
    monirs.forEach((monir) => {
        closeModal(monir);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

function openModal(mobil) {
    if (mobil == null) return;
    mobil.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(mobil) {
    if (mobil == null) return;
    mobil.classList.remove("active");
    overlay.classList.remove("active");
}

function openModal(monir) {
    if (mobil == null) return;
    monir.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(monir) {
    if (mobil == null) return;
    monir.classList.remove("active");
    overlay.classList.remove("active");
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "its a draw!";
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "you win!";
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "you lose!";
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "you win!";
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "you lose!";
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "you win!";
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "you lose!";
    }
    if (result === "you win!") {
        playAudio();
        openModal(monir);
    }
    if (result === "you lose!") {
        Oflosing();
        openModal(mobil);
    }
    if (result === "its a draw!") {
        openModal(modal);
    }
}
