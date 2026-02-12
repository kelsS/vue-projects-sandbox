// when "add goal" is clicked, the text content within the "goal" input is added to the ul list of todos

// 1. on click -> fetch the user input
// 2. create a new list item
// 3. add new list item to the unordered list of todos

const buttonEl = document.querySelector('button');

const inputEl = document.querySelector('#goal');

const listEl = document.querySelector('ul');

function addGoal() {
    // store entered val
    const enteredVal = inputEl.value;
    // create newList item for the enteredVal
    const listItemEl = document.createElement('li');
    // set the enteredVal as text of listItemEl
    listItemEl.textContent = enteredVal;
    // add the new list item to the end of the ul list of todos
    listEl.appendChild(listItemEl);
    // reset the input value once the goal has been added to the list
    inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);