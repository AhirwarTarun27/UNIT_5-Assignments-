import "./style.css";

let imgBox = document.getElementById("img");

let div = document.createElement("div");
div.className = "logoBox";

let img = document.createElement("img");
img.src = "logo.svg";
img.style.width = "100%";
img.style.height = "100%";

div.append(img);

imgBox.append(div);

const noteContainer = document.querySelector(".note-container");
const form = document.querySelector("form");

//class: for creating a new note
class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = Math.random();
  }
}

//Event: note form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleInput = document.querySelector("#title");
  const noteInput = document.querySelector("#note");

  //validate inputs
  if (titleInput.value.length > 0 && noteInput.value.length > 0) {
    const newNote = new Note(titleInput.value, noteInput.value);
    addNewNoteToList(newNote);
    titleInput.value = "";
    noteInput.value = "";
    titleInput.focus();
  }
});

function addNewNoteToList(note) {
  let table = document.querySelector("table");
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerHTML = `<p>${note.title}</p>`;
  let td2 = document.createElement("td");
  td2.innerHTML = `<p>${note.body}</p>`;
  let td3 = document.createElement("td");
  td3.innerText = "Delete";
  td3.style.backgroundColor = "red";
  td3.className = "hovering";

  td3.addEventListener("click", () => {
    row.remove();
  });
  row.append(td1, td2, td3);
  table.append(row);
}
