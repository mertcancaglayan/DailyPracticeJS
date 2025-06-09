const quotes = [
	{
		id: 0,
		quote: "It always seems impossible until it's done.",
		author: "Nelson Mandela",
	},
	{
		id: 1,
		quote: "The only way to do great work is to love what you do.",
		author: "Steve Jobs",
	},
	{
		id: 2,
		quote: "Life is what happens when you're busy making other plans.",
		author: "John Lennon",
	},
	{
		id: 3,
		quote: "In the end, it's not the years in your life that count. It's the life in your years.",
		author: "Abraham Lincoln",
	},
	{
		id: 4,
		quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
		author: "Nelson Mandela",
	},
	{
		id: 5,
		quote: "You miss 100% of the shots you don't take.",
		author: "Wayne Gretzky",
	},
	{
		id: 6,
		quote: "The future belongs to those who believe in the beauty of their dreams.",
		author: "Eleanor Roosevelt",
	},
	{
		id: 7,
		quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
		author: "Mother Teresa",
	},
	{
		id: 8,
		quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
		author: "Ralph Waldo Emerson",
	},
	{
		id: 9,
		quote: "The only thing we have to fear is fear itself.",
		author: "Franklin D. Roosevelt",
	},
	{
		id: 10,
		quote: "It is during our darkest moments that we must focus to see the light.",
		author: "Aristotle",
	},
	{
		id: 11,
		quote: "Whoever is happy will make others happy too.",
		author: "Anne Frank",
	},
	{
		id: 12,
		quote: "Do not let making a living prevent you from making a life.",
		author: "John Wooden",
	},
	{
		id: 13,
		quote: "Life is either a daring adventure or nothing at all.",
		author: "Helen Keller",
	},
	{
		id: 14,
		quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
		author: "Thomas Edison",
	},
	{
		id: 15,
		quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
		author: "Brian Tracy",
	},
	{
		id: 16,
		quote: "The purpose of our lives is to be happy.",
		author: "Dalai Lama",
	},
	{
		id: 17,
		quote: "Get busy living or get busy dying.",
		author: "Stephen King",
	},
	{
		id: 18,
		quote: "Turn your wounds into wisdom.",
		author: "Oprah Winfrey",
	},
	{
		id: 19,
		quote: "The two most important days in your life are the day you are born and the day you find out why.",
		author: "Mark Twain",
	},
	{
		id: 20,
		quote: "Believe you can and you're halfway there.",
		author: "Theodore Roosevelt",
	},
	{
		id: 21,
		quote: "I have learned over the years that when one's mind is made up, this diminishes fear.",
		author: "Rosa Parks",
	},
	{
		id: 22,
		quote: "I would rather die of passion than of boredom.",
		author: "Vincent van Gogh",
	},
	{
		id: 23,
		quote: "A person who never made a mistake never tried anything new.",
		author: "Albert Einstein",
	},
	{
		id: 24,
		quote: "Everything you've ever wanted is on the other side of fear.",
		author: "George Addair",
	},
	{
		id: 25,
		quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
		author: "Winston Churchill",
	},
	{
		id: 26,
		quote: "Happiness is not something readymade. It comes from your own actions.",
		author: "Dalai Lama",
	},
	{
		id: 27,
		quote: "Whatever you are, be a good one.",
		author: "Abraham Lincoln",
	},
	{
		id: 28,
		quote: "The best way to predict the future is to invent it.",
		author: "Alan Kay",
	},
	{
		id: 29,
		quote: "Don't count the days, make the days count.",
		author: "Muhammad Ali",
	},
];

const btn = document.getElementById("btn");
const quoteArea = document.getElementById("quote");
const authorArea = document.getElementById("author");
const copyButton = document.getElementById("copy");

let showedQuote = [];

btn.addEventListener("click", () => {
	displayQuote();
});

copyButton.addEventListener("click", () => {
	copyQuote();
});

function displayQuote() {
	let newQuoteId;
	do {
		newQuoteId = generateId();
		if (showedQuote.length === quotes.length) {
			quoteArea.innerText = "No more quote left";
			authorArea.innerText = "";
			return;
		}
	} while (showedQuote.includes(newQuoteId));

	showedQuote.push(newQuoteId);
	quoteArea.innerText = quotes[newQuoteId].quote;
	authorArea.innerText = quotes[newQuoteId].author;
}

displayQuote();

function generateId() {
	return Math.floor(Math.random() * 30);
}

async function copyQuote() {
	try {
		await navigator.clipboard.writeText(quoteArea.innerText);
	} catch (error) {
		console.error(error);
	}
}
