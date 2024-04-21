function toggleCompleted(checkbox) {
    var li = checkbox.parentNode;
    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
}

function addTask() {
    var taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        var ul = document.querySelector('.todo-container ul');
        var li = document.createElement('li');
        li.innerHTML = '<input type="checkbox" onclick="toggleCompleted(this)"> ' + taskInput + ' <button class="delete-btn" onclick="deleteTask(this)">Xóa</button>';
        ul.appendChild(li);
        document.getElementById('taskInput').value = '';
    }
}

function deleteTask(button) {
    var li = button.parentNode;
    li.remove();
}
