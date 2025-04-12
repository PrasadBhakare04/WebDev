let input = prompt("Enter your choice");
const todos = ['Collect Ginger', 'Clean Fridge'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*******')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log('*******')
    }
    else if (input === 'new') {
        const newTodo = prompt('Ok, what is new todo ?');
        todos.push(newTodo);
        console.log(`added ${newTodo} to the list`)
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter the index you want to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]} from the list`)
        }
    }
    else {
        console.log('Unknown Index')
    }
    input = prompt("What you want to do?")
}
console.log("You Quit The App");