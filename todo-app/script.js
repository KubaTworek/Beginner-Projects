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
        let i = 0;

        for(let task of this.activeTasks){        
            const taskEl = document.createElement('li');
            taskEl.className = 'active-task__element task-element';
            taskEl.innerHTML = `<p>${task.text}</p>`;
            taskEl.draggable = true;
            taskEl.id = Math.random();
            taskEl.addEventListener('dragstart', event => {
                event.dataTransfer.setData('text/plain', taskEl.id);
                event.dataTransfer.effectAllowed = 'move';
            });
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
            taskEl.draggable = true;
            taskEl.id = Math.random();
            taskEl.addEventListener('dragstart', event => {
                event.dataTransfer.setData('text/plain', taskEl.id);
                event.dataTransfer.effectAllowed = 'move';
            });
            finishedTasksList.appendChild(taskEl);
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

const garbage = document.querySelector('.garbage');

garbage.addEventListener('dragenter', event => {
    if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
    }
    garbage.classList.add('droppable');
});

garbage.addEventListener('dragover', event => {
    if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
    }
});

garbage.addEventListener('dragleave', event => {
    garbage.classList.remove('droppable');
});

garbage.addEventListener('drop', event => {
    const prjId = event.dataTransfer.getData('text/plain');
    if(document.getElementById(prjId).classList.contains('finished-task__element')) {      
        tasksList.numberFinished--;
        numberOfFinished.textContent = tasksList.numberFinished;
        let pos = tasksList.finishedTasks.indexOf(document.getElementById(prjId));
        tasksList.finishedTasks.splice(pos, 1);
        document.getElementById(prjId).parentElement.removeChild(document.getElementById(prjId));
    } else {
        tasksList.numberActive--;
        numberOfActive.textContent = tasksList.numberActive;
        let pos = tasksList.activeTasks.indexOf(document.getElementById(prjId));
        tasksList.activeTasks.splice(pos, 1);
        document.getElementById(prjId).parentElement.removeChild(document.getElementById(prjId));
    }
    garbage.classList.remove('droppable');
});