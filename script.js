// selecet

const inputBox = document.querySelector("#input-box");
const button = document.querySelector("button");
const notesContainer = document.querySelector("#notes-container");

//button click

button.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputBox.value === "") {
        window.alert("Input can not be empty!")
    }
    else {
        //add note
        addNote(inputBox.value, getDate());
        inputBox.value = "";
    }
    updateData();
});

//add note
function addNote(text, date) {

    let li = document.createElement("li");
    li.innerHTML = text;

    let span = document.createElement("span");
    span.innerHTML = "&#10005;"

    let br = document.createElement("br")

    let time = document.createElement("time");
    time.innerHTML = date;

    notesContainer.prepend(li);
    li.appendChild(span);
    li.appendChild(br);
    li.appendChild(time);
}

function getDate() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let local_date = date.toLocaleDateString();

    return `${time} ${local_date}`;
}

//notes click => chk unchked
//close iocn => rmv

notesContainer.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {
        console.log(e.target.classList)
        e.target.classList.toggle("selected");
        updateData();
    }

    if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        updateData();
    }

});


//localstorage
function updateData() {
    localStorage.setItem("data", notesContainer.innerHTML);

}

//load data form local storage
function loadData() {
    notesContainer.innerHTML = localStorage.getItem("data");
}

loadData();