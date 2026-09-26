const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

function addTask() {
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');

  const checkSpan = document.createElement('span');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-check';
  checkSpan.appendChild(checkbox);

  const textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = text;

  li.appendChild(checkSpan);
  li.appendChild(textSpan);
  list.appendChild(li);

  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

list.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  if (e.target.classList.contains('task-check')) {
    li.classList.toggle('completed');
    return;
  }

  li.remove();
});