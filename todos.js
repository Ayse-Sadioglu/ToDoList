let input = prompt("What would you like to do?");
const todos = ['Read book', 'Clean the house'];
while (input !== 'quit') {
    if (input === 'list') {
        console.log('****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} :${todos[i]}`);

        }
        console.log('****************');

    } else if (input === 'new') {
        const newTodo = prompt('What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!` );

    } else if (input === 'delete') {
        const index = parseInt(prompt('Please enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Index ${deleted[0]} deleted.`);

        }else{
            console.log("Unknown index");
        }



    }
    input = prompt("What would like to do?");

} console.log("Quit the app!");
