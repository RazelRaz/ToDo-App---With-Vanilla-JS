const new_task = document.querySelector('#new_task');
const form = document.querySelector('form');
const todoUL = document.querySelector('#items');
const completeUL = document.querySelector('.complete-list ul');

// tasks
const createTask = function(task){
    const listItem = document.createElement('li');
    const checkbox = document.createElement('checkbox');
    const label = document.createElement('label');

    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

// task input

const addTask =  function(event){
    event.preventDefault();
    const listItem = createTask(new_task.value);
    todoUL.appendChild(listItem);
    new_task.value = '';
    //bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask)
}


const completeTask = function(){
    const listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    completeUL.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}

const deleteTask = function(){
    const listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
    
}

const bindInCompleteItems = function(taskItem, checkboxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}