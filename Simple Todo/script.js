const addBtn = document.getElementById("add-btn");
const taskList = document.querySelector(".taskList");

function getTasks() {
	const tasks = JSON.parse(localStorage.getItem("mytodotasks")) || [];

	tasks.forEach((task) => {
		renderTask(task);
	});
}
getTasks();

function saveTask(task) {
	const tasks = JSON.parse(localStorage.getItem("mytodotasks")) || [];
	tasks.push(task);
	localStorage.setItem("mytodotasks", JSON.stringify(tasks));
}

function renderTask(task) {
	const newTask = document.createElement("li");
	newTask.classList.add("task");
	newTask.innerHTML = `
		<div>
			<p>${task}</p>
			<button class="btn-delete">&times;</button>
		</div>
	`;
	taskList.append(newTask);
}

addBtn.addEventListener("click", (event) => {
	event.preventDefault();
	const inputValue = document.getElementById("taskInput").value;
	addTask(inputValue);
});

function addTask(task) {
	if (!task.trim()) return;

	renderTask(task);
	saveTask(task);
	taskInput.value = "";
}

taskList.addEventListener("click", (e) => {
	if (e.target.classList.contains("btn-delete")) {
		removeTask(e.target);
	}
});

function removeTask(btn) {
	const taskItem = btn.closest("li");
	if (taskItem) {
		taskItem.remove();
	}
}
