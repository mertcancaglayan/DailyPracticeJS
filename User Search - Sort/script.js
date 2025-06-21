const usersData = [
	{ name: "Alice", age: 25, country: "USA" },
	{ name: "Bob", age: 30, country: "Canada" },
	{ name: "Charlie", age: 22, country: "UK" },
	{ name: "Diana", age: 27, country: "Germany" },
	{ name: "Efe", age: 35, country: "Turkey" },
	{ name: "Fatima", age: 28, country: "Morocco" },
	{ name: "George", age: 40, country: "Australia" },
	{ name: "Hiroshi", age: 33, country: "Japan" },
	{ name: "Isabella", age: 24, country: "Italy" },
	{ name: "Javier", age: 31, country: "Spain" },
	{ name: "Katarina", age: 29, country: "Serbia" },
	{ name: "Liam", age: 26, country: "Ireland" },
	{ name: "Mina", age: 21, country: "Egypt" },
	{ name: "Noah", age: 38, country: "New Zealand" },
	{ name: "Olga", age: 34, country: "Russia" },
	{ name: "Pierre", age: 36, country: "France" },
	{ name: "Quinn", age: 23, country: "USA" },
	{ name: "Raj", age: 32, country: "India" },
	{ name: "Sofia", age: 27, country: "Argentina" },
	{ name: "Thomas", age: 41, country: "UK" },
	{ name: "Ursula", age: 29, country: "Germany" },
	{ name: "Victor", age: 39, country: "Brazil" },
	{ name: "Wendy", age: 26, country: "Canada" },
	{ name: "Xander", age: 30, country: "Netherlands" },
	{ name: "Yara", age: 22, country: "Jordan" },
	{ name: "Zhang", age: 37, country: "China" },
	{ name: "Amir", age: 28, country: "Iran" },
	{ name: "Bianca", age: 24, country: "Portugal" },
	{ name: "Carlos", age: 35, country: "Mexico" },
	{ name: "Daniela", age: 31, country: "Chile" },
	{ name: "Elif", age: 25, country: "Turkey" },
	{ name: "Fernando", age: 40, country: "Colombia" },
	{ name: "Greta", age: 29, country: "Sweden" },
	{ name: "Hamza", age: 34, country: "Pakistan" },
	{ name: "Ines", age: 23, country: "Croatia" },
	{ name: "Jonas", age: 33, country: "Lithuania" },
	{ name: "Karim", age: 36, country: "Algeria" },
	{ name: "Lucia", age: 27, country: "Peru" },
	{ name: "Mateo", age: 32, country: "Uruguay" },
	{ name: "Nadia", age: 26, country: "Lebanon" },
	{ name: "Omar", age: 30, country: "Morocco" },
	{ name: "Petra", age: 28, country: "Slovenia" },
	{ name: "Qasim", age: 35, country: "Iraq" },
	{ name: "Rina", age: 22, country: "Indonesia" },
	{ name: "Stefan", age: 31, country: "Romania" },
	{ name: "Tariq", age: 37, country: "Saudi Arabia" },
	{ name: "Uma", age: 24, country: "Nepal" },
	{ name: "Viktor", age: 39, country: "Hungary" },
	{ name: "Waleed", age: 33, country: "Kuwait" },
	{ name: "Xenia", age: 21, country: "Ukraine" },
	{ name: "Yusuf", age: 29, country: "Tunisia" },
];

const usersList = document.getElementById("user-list");
const searchInput = document.getElementById("search");
const sortValue = document.getElementById("sort");

searchInput.addEventListener("keyup", () => {
	debouncedHandleSearch();
});

sortValue.addEventListener("change", () => {
	let sortBy = sortValue.value;
	sortUsers(usersData, sortBy);
});

function sortUsers(users, sortBy) {
	let sortedUsers = users;

	switch (sortBy) {
		case "name":
			sortedUsers.sort((a, b) => {
				const nameA = a.name.toUpperCase();
				const nameB = b.name.toUpperCase();

				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}

				return 0;
			});

			break;
		case "age":
			sortedUsers.sort((a, b) => a.age - b.age);
			break;
		default:
			usersList.innerHTML = users
				.map((user) => {
					return `				<li>
					<span><strong>Name: </strong> ${user.name}</span>
					<span><strong>Age: </strong>  ${user.age}</span>
					<span><strong>Country: </strong>  ${user.country}</span>
				</li>`;
				})
				.join(" ");
			break;
	}

	displayUsers(sortedUsers);
}

function displayUsers(users) {
	usersList.innerHTML = users
		.map((user) => {
			return `				<li>
					<span><strong>Name: </strong> ${user.name}</span>
					<span><strong>Age: </strong>  ${user.age}</span>
					<span><strong>Country: </strong>  ${user.country}</span>
				</li>`;
		})
		.join(" ");
}

displayUsers(usersData);

function debounce(func, timeout = 300) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => func.apply(this, args), timeout);
	};
}

function handleSearch() {
	const query = searchInput.value.toLowerCase();

	const searchedUsers = usersData.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));

	displayUsers(searchedUsers);
}

const debouncedHandleSearch = debounce(handleSearch, 300);
