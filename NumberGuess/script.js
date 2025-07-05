const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const guessInput = document.getElementById("guess");
const messageElement = document.getElementById("message");
const historyElement = document.getElementById("history");

let number;
let history = [];
let attempts = 0;

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	checkNumber();
});

resetBtn.addEventListener("click", () => {
	resetGame();
});

function genarateNumber() {
	number = Math.floor(Math.random() * 100) + 1;
}
genarateNumber();

function checkNumber() {
	let guessedNumber = Number(guess.value);

	let isBetween = guessedNumber >= 1 && guessedNumber <= 100;

	if (!guess.value || isNaN(guessedNumber) || !isBetween) {
		messageElement.innerText = "Enter a valid number between 1-100";
		return;
	}

	if (number !== guessedNumber) {
		history.push(guessedNumber);
		attempts += 1;
		checkAttempts();
		displayHistory();
		return;
	}

	checkAttempts();
	messageElement.innerText = `Congrats the number was: ${number}`;
	resetBtn.style.display = "inline-block";
}

function resetGame(params) {
	resetBtn.style.display = "none";
	messageElement.innerText = "";
	submitBtn.style.display = "inline-block";
	attempts = 0;
	history = [];
	genarateNumber();
	displayHistory();
}

function checkAttempts() {
	if (attempts >= 3) {
		messageElement.innerText = `No more Guess`;
		submitBtn.style.display = "none";
		resetBtn.style.display = "inline-block";
		return;
	}
}

function displayHistory() {
	historyElement.innerHTML = history
		.map((element) => {
			return `<li>${element}</li>`;
		})
		.join("");
}
