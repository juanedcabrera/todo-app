const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

// Event listener for hitting the submit button
form.addEventListener('submit', (e) => {

    // Prevent default to stop the page from refreshing
    e.preventDefault();

    // Create a variable from the input
    const todoText = input.value;

    // Create an item in the todo
    if(todoText) {
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;

        // Add event listener to strike through an item when clicked
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        });

        // Add event listener to underline an item when hovered
        todoEl.addEventListener('mouseover', () => {
            todoEl.classList.add('hover');
        });

        // Add event listener to remove when mouse is no longer touching
        todoEl.addEventListener('mouseout', () => {
            todoEl.classList.remove('hover');
        });

        // Add event listener to remove an item when double-clicked
        todoEl.addEventListener('dblclick', () => {
            todoEl.remove();
        });

        // Adds the item to the todo-list
        todos.appendChild(todoEl);

        // Reset the input value to nothing
        input.value = "";
    }
});

// Add event listener to mark an item as completed when clicked
todoEl.addEventListener('click', () => {
    todoEl.classList.toggle('completed');
});
