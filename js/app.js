const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

    function addTask(taskText) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });

const taskLabel = document.createElement('span');
taskLabel.textContent = taskText;
const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
        });

        taskItem.appendChild(checkbox);

        taskItem.appendChild(taskLabel);

        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    }
    addTaskButton.addEventListener('click', () => {
const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });
    
    newTaskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
