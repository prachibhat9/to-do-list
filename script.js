function validateForm() {
        var task = document.getElementById("task").value;
        var tags = document.getElementById("tags").value;
        
        if (task.trim() === "" || tags === "") {
            alert("Please fill out both Task and Tags fields.");
            return false; 
        }
        displayResult();
        return true;
    }



function displayResult(){
var task=document.getElementById('task').value;
var tag=document.getElementById('tags').value;
;
var newResult=document.createElement('div');
newResult.className='tasklist'
newResult.setAttribute('data-tag', tag);
newResult.innerHTML = `<input type="checkbox" class="checks"><span>${task}</span><button class="delete"onclick="deleteTask(this)"> delete </button><span class="task-tag">${tag}</span>`;
var taskblock=document.getElementById('taskblock')
taskblock.appendChild(newResult);
document.getElementById('task').value='';
document.getElementById('tags').selectedIndex = 0; 

}
function deleteTask(button) {
  var task = button.parentElement;
  task.remove();
}

document.addEventListener('DOMContentLoaded', () => {
  const tagButtons = document.querySelectorAll('.display button');
  tagButtons.forEach(button => {
    button.addEventListener('click', () => filterTasks(button.textContent));
  });
  const check = document.getElementById('check');
  check.addEventListener('change', function() {
    filterCheck(this.checked);
  });
});

function filterTasks(tag) {
  const tasks = document.querySelectorAll('.taskblock .tasklist');
  tasks.forEach(task => {
    if (tag === 'All' || task.getAttribute('data-tag') === tag) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
}

function filterCheck(checked) {
  const tasks = document.querySelectorAll('.taskblock .tasklist');
  tasks.forEach(task => {
    const checkbox = task.querySelector('.checks');
    if (checked) {
      if (checkbox.checked) {
        task.style.display = 'flex';
      } else {
        task.style.display = 'none';
      }
    } else {
      task.style.display = 'flex';
    }
  });
}