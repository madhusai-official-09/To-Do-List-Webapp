document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="edit">Edit</button>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
        addTaskEventListeners(li);
    }

    function addTaskEventListeners(taskItem) {
        const editButton = taskItem.querySelector('.edit');
        const completeButton = taskItem.querySelector('.complete');
        const deleteButton = taskItem.querySelector('.delete');
        const taskText = taskItem.querySelector('span');

        editButton.addEventListener('click', function() {
            const newText = prompt('Edit task:', taskText.textContent);
            if (newText !== null && newText.trim() !== '') {
                taskText.textContent = newText.trim();
            }
        });

        completeButton.addEventListener('click', function() {
            taskText.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });
    }
});