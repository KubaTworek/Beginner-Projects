class Task {
    constructor(text) {
        this.text = text;
    }
}

class TasksList {
    activeTasks = [];
    finishedTasks = [];
    numberActive = 0;
    numberFinished = 0;

    addActive(element) {
        this.activeTasks.push(element)
        this.numberActive++;
        numberOfActive.textContent = this.numberActive;
    }

    addToFinished(element) {
        this.finishedTasks.push(element)
        let pos = this.activeTasks.indexOf(element);
        this.activeTasks.splice(pos, 1);
        this.numberFinished++;
        numberOfFinished.textContent = this.numberFinished;
        this.numberActive--;
        numberOfActive.textContent = this.numberActive;
    }

    removeElement(element) {
        let pos = this.finishedTasks.indexOf(element);
        this.finishedTasks.splice(pos, 1);
        this.numberFinished--;
        numberOfFinished.textContent = this.numberFinished;
    }

    render() {
        activeTasksList.innerHTML = ``;
        finishedTasksList.innerHTML = ``;

        for(let task of this.activeTasks){
            const taskEl = document.createElement('li');
            taskEl.className = 'active-task__element task-element';
            taskEl.innerHTML = `<p>${task.text}</p>`;
            activeTasksList.appendChild(taskEl);
            taskEl.addEventListener('click', () => {
                this.addToFinished(task);
                this.render();
            });
        }

        for(let task of this.finishedTasks){
            const taskEl = document.createElement('li');
            taskEl.className = 'finished-task__element task-element';
            taskEl.innerHTML = `<p>${task.text}</p>`;
            finishedTasksList.appendChild(taskEl);
            taskEl.addEventListener('click', () => {
                this.removeElement(task);
                this.render();
            });
        }
    }
}


const activeTasksList = document.getElementById('active-tasks__list');
const finishedTasksList = document.getElementById('finished-tasks__list');
const addNewTaskBtn = document.getElementById('add-button');
const inputEl = document.getElementById('input');
const warningText = document.getElementById('warning-alert');

const background = document.querySelector('.background');
const todoEditor = document.querySelector('.name-editor');
const taskInput = document.getElementById('task-input');
const cancelBtn = document.getElementById('cancel-button');
const confirmBtn = document.getElementById('confirm-button');

const numberOfActive = document.getElementById('numer-of-active');
const numberOfFinished = document.getElementById('numer-of-finished');

const tasksList = new TasksList();

addNewTaskBtn.addEventListener('click', toggleEditBox);
confirmBtn.addEventListener('click', confirmTask);
cancelBtn.addEventListener('click', cancel);


function confirmTask() {
    if (taskInput.value.trim()) {
        tasksList.addActive(new Task(taskInput.value));
        tasksList.render();
        taskInput.value = '';
        toggleEditBox();
        warningText.classList.add('hidden');
        taskInput.classList.remove('warning');
    } else {
        taskInput.value = '';
        warningText.classList.remove('hidden');
        taskInput.classList.add('warning');
    }
}

function cancel() {
    taskInput.value = '';
    toggleEditBox();
    warningText.classList.add('hidden');
    taskInput.classList.remove('warning');
}

function toggleEditBox() {
    background.classList.toggle("shadowed");
    todoEditor.classList.toggle("show");
}