function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(taskText => renderTask(taskText));
}

function saveTasks() {
  const taskList = document.querySelectorAll('#taskList li');
  const tasks = [];

  taskList.forEach(li => {
    const text = li.firstChild.textContent;
    tasks.push(text);
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(taskText) {
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  renderTask(taskText);
  saveTasks();
  input.value = '';
}

// Коли сторінка завантажилась — завантажити задачі
window.onload = loadTasks;
