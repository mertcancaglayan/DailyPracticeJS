const nameInput = document.getElementById("nameInput");
const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const formMsg = document.getElementById("formMsg");

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const isValid = validateForm();
	if (isValid) {
		console.log("Form is valid, submitting...");
	}
});

function validateForm() {
	const isNameValid = validateName();
	const isEmailValid = validateEmail();
	const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        formMsg.innerText = ""
    }

	return isNameValid && isEmailValid && isPasswordValid;
}

function validateName() {
	if (!nameInput.value) {
		formMsg.innerText = "Name must not be empty";
		return false;
	}

	if (nameInput.value.length < 3) {
		formMsg.innerText = "Name must be at least 3 characters long";
		return false;
	}
	return true;
}

function validateEmail() {
	if (!mailInput.value) {
		formMsg.innerText = "mailInput must not be empty";
		return false;
	}

	if (
		!mailInput.value.includes("@") ||
		!mailInput.value.includes(".") ||
		mailInput.value.indexOf("@") > mailInput.value.lastIndexOf(".")
	) {
		formMsg.innerText = "Please enter a valid email address";
		return false;
	}
	return true;
}

function validatePassword() {
	if (!passwordInput.value || !confirmPasswordInput.value) {
		formMsg.innerText = "Password areas must not be empty";
		return false;
	}

	if (passwordInput.value.length < 6) {
		formMsg.innerText = "Password must be at least 6 characters long";
		return false;
	}
	if (passwordInput.value !== confirmPasswordInput.value) {
		formMsg.innerText = "Passwords don't match";
		return false;
	}
	return true;
}
