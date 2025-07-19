const userInfoElement = document.getElementById("user-info");
const buttonElement = document.getElementById("get-user");
const loadingElement = document.getElementById("loading");

buttonElement.addEventListener("click", () => {
	getUser();
});

let user;

async function getUser() {
	const url = "https://randomuser.me/api/";
	loadingElement.style.display = "block";
    userInfoElement.innerHTML = ""

	try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error("Response Status: " + res.status);
		}

		const data = await res.json();
		user = data.results[0];
		displayUser(user);
	} catch (error) {
		throw new Error(error.message);
	} finally {
		loadingElement.style.display = "none";
	}
}

getUser();

const displayUser = (user) => {
	userInfoElement.innerHTML = `
    		<img src=${user.picture.medium} />
			<p>Name: ${user.name.title}  ${user.name.first} ${user.name.last}</p>
			<p>Age: ${user.dob.age} </p>
			<p>Country: ${user.location.country} </p>
			<p>Email: ${user.email} </p>`;
};
