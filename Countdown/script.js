const displayBox = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let count = 5;
let isPaused = false;
let timer = null;

function updateDisplay() {
	displayBox.innerText = count;
}

function startCountdown() {
	if (timer) return;
	count = 5;
	updateDisplay();

	timer = setInterval(() => {
		if (!isPaused && count > 0) {
			count--;
			updateDisplay();
		}
		if (count === 0) {
			resetCountdown();
		}
	}, 1000);
}

function stopCountdown() {
	isPaused = !isPaused;
}

function resetCountdown() {
	clearInterval(timer);
	timer = null;
	count = 0;
	isPaused = false;
	updateDisplay();
}

startButton.addEventListener("click", () => {
	startCountdown();
});

stopButton.addEventListener("click", () => {
	stopCountdown();
});

resetButton.addEventListener("click", () => {
	resetCountdown();
});
