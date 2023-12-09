function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var tasksList = document.getElementById("tasks");
        var li = document.createElement("li");
        li.innerHTML = '<span>' + taskText + '</span> <span class="delete-btn" onclick="deleteTask(this)">Delete</span>';
        tasksList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}

function deleteTask(element) {
    var li = element.parentElement;
    li.remove();
}