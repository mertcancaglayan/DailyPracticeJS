const button = document.getElementById("get-weather");
const weatherInfoContainer = document.getElementById("weather-info");

button.addEventListener("click", (e) => {
	e.preventDefault();
	let cityName = document.getElementById("city-input").value;
	getData(cityName);
});

const API_KEY = "example.com";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getData(cityName = "İstanbul") {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
		);
		if (!response.ok) throw new Error("City not found");
		const data = await response.json();
		displayWeatherInfo(data);
	} catch (error) {
		console.error(error);
	}
}
getData();

function displayWeatherInfo(data) {
	weatherInfoContainer.innerHTML = `<h3>${data.name}</h3>
			<p>
				<span>Tempature: <strong>${data.main.temp}</strong></span>
			</p>`;
}
