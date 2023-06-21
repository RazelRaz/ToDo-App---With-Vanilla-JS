const new_task = document.querySelector('#new_task');
const form = document.querySelector('form');
const todoUL = document.querySelector('#items');
const completeUL = document.querySelector('.complete-list ul');


const createTask = function(task){
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');

    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;

}