document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    function renderTasks() {
      // Dummy tasks for demonstration
      const tasks = [
        { task: 'Task 1', completed: false },
        { task: 'Task 2', completed: true },
        { task: 'Task 3', completed: false },
      ];
  
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
          <span>${task.task}</span>
          <button onclick="completeTask(${index})">Complete</button>
          <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(li);
      });
    }
  
    function addTask() {
      const task = taskInput.value.trim();
      if (task !== '') {
        // Dummy implementation for adding a task
        console.log(`Task added: ${task}`);
        renderTasks();
      }
    }
  
    function completeTask(index) {
      // Dummy implementation for completing a task
      console.log(`Task completed: ${index}`);
      renderTasks();
    }
  
    function removeTask(index) {
      // Dummy implementation for removing a task
      console.log(`Task removed: ${index}`);
      renderTasks();
    }
  
    renderTasks();
  });
  