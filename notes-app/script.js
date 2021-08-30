const addBtn = document.getElementById('add');
const main = document.getElementById('main');

getDateNow();

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

addBtn.addEventListener('click', () => {
    addNewNote();
});


function getDateNow() {
    const now = new Date();
    year = now.getFullYear();
    month = now.getMonth();
    day = now.getDate();
    dayWeek = now.getDay();
    hours = now.getHours();
    minutes = now.getMinutes();
    
    if(minutes<10) {
        minutes = "0" + minutes; 
    }

    switch (dayWeek)
        {
        case 1:
            dayWeek = "Monday";
            break;
        case 2:
            dayWeek = "Tuesday";
            break;
        case 3:
            dayWeek = "Wednesday";
            break;
        case 4:
            dayWeek = "Thursday";
            break;
        case 5:
            dayWeek = "Friday";
            break;
        case 6:
            dayWeek = "Saturday";
            break;
        case 7:
            dayWeek = "Sunday";
            break;
        };

    switch (month)
        {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        };
};

function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
};

function addNewNote(text="") {
    getDateNow();
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
    <div class="basic-note">
        <div class="navbar">
            <span>${dayWeek} ${day} ${month}, ${year} at ${hours}:${minutes}</span>
            <div class="icons">
                <i id="check" class="fas fa-check"></i>
                <i id="delete" class="fas fa-trash-alt"></i>
            </div>
        </div>
        <div class="text">
            <textarea class="textarea">${text}</textarea>
        </div>
    </div>
    `;

    main.prepend(note);

    const deleteBtn = document.getElementById('delete');
    const checkBtn = document.getElementById('check');

    deleteBtn.addEventListener("click", () => {
        note.remove();

        updateLS();
    });

    checkBtn.addEventListener("click", () => {
        updateLS();
    });
};