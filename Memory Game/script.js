const grid = document.getElementById("grid");

const cards = [
	{ emoji: "🍕", value: 1 },
	{ emoji: "🍕", value: 1 },
	{ emoji: "🎈", value: 2 },
	{ emoji: "🎈", value: 2 },
	{ emoji: "🐶", value: 3 },
	{ emoji: "🐶", value: 3 },
	{ emoji: "🌵", value: 4 },
	{ emoji: "🌵", value: 4 },
	{ emoji: "🚗", value: 5 },
	{ emoji: "🚗", value: 5 },
	{ emoji: "🍩", value: 6 },
	{ emoji: "🍩", value: 6 },
	{ emoji: "🎮", value: 7 },
	{ emoji: "🎮", value: 7 },
	{ emoji: "🎧", value: 8 },
	{ emoji: "🎧", value: 8 },
];

cards.sort(() => Math.random() - 0.5);

grid.innerHTML = cards
	.map((card) => {
		return `<div data-match="${card.value}" onclick="checkMatch(this)" class="card"><span class="front">${card.emoji}</span></div>`;
	})
	.join("");

let firstElement,
	secondElement = null;

let clickedTime = 0;
let disableBoard = false;

function checkMatch(card) {
	if (disableBoard) return;
	if (firstElement === card) return;

	if (!firstElement) {
		firstElement = card;
		firstElement.classList.add("flipped");
		return;
	}
	secondElement = card;
	secondElement.classList.add("flipped");

	const isMatch = firstElement.getAttribute("data-match") === secondElement.getAttribute("data-match");

	if (isMatch) {
		setTimeout(() => {
			firstElement.classList.add("matched");
			secondElement.classList.add("matched");
		}, 1000);
	}

	disableBoard = true;

	setTimeout(() => {
		firstElement.classList.remove("flipped");
		secondElement.classList.remove("flipped");
		firstElement = null;
		secondElement = null;
		disableBoard = false;
	}, 2000);
}
