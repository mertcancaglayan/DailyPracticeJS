const noteInput = document.getElementById("note-input");
const noteAddBtn = document.getElementById("add-note");

noteAddBtn.addEventListener("click", () => {
	addNote();
});

let notes = [];

function getNotes() {
	notes = localStorage.getItem("notesad");
	if (!notes) {
		notes = [];
		return;
	}
	notes = JSON.parse(notes);
	displayNotes(notes);
}
getNotes();

function displayNotes() {
	noteInput.value = null;
	const noteList = document.getElementById("notes-list");
	noteList.innerHTML = "";

	notes.forEach((note) => {
		let newDisplayNote = document.createElement("li");
		newDisplayNote.classList.add("note");
		newDisplayNote.setAttribute("data-id", note.timestamp);
        let date = new Date(note.timestamp).toLocaleString()
		newDisplayNote.innerHTML = `		<p class="note-name">${note.text}</p>
						<span class="note-span">
							<span class="date">Created: ${date}</span>
							<button class="delete" onClick=deleteNote(this)>Delete</button></span
						>`;

		noteList.append(newDisplayNote);
	});
}

function addNote() {
	let newNote = { text: noteInput.value, timestamp: Date.now() };

	notes.push(newNote);

	updateNotes();

	getNotes();
}

function deleteNote(element) {
	let removedNote = element.closest("li.note");
	notes.forEach((note, index) => {
		if (note.timestamp === Number(removedNote.getAttribute("data-id"))) {
			notes.splice(index, 1);
			updateNotes();
		}
	});
}

function updateNotes() {
	localStorage.setItem("notesad", JSON.stringify(notes));
	displayNotes();
}
