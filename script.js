function addTask(){
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = () => li.remove();
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value = '';
}