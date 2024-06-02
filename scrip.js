document.getElementById('taskInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
      addTask();
  }
});

function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();
  
  let taskDate = document.getElementById('todoDate');
  let taskDateText = taskDate.value.trim();
  
  if (taskText !== '') {
      let taskList = document.getElementById('taskList');
      let listItem = document.createElement('li');
      
      listItem.innerHTML = `${taskText} ${taskDateText} <button class="delete" onclick="removeTask(this)">Delete</button>`;
      listItem.addEventListener('click', function () {
          this.classList.toggle('completed');
      });

      taskList.appendChild(listItem);
      taskInput.value = '';
  }
}

function removeTask(element) {
  let listItem = element.parentElement;
  listItem.remove();
}
document.querySelector("#todo-date")