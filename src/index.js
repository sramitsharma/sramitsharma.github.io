function sayHello() {
    this.getData()
        .then(response => {
            debugger;
        });
}

function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());
}