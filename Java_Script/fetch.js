

async function getData() {
    let responce = fetch('https://jsonplaceholder.typicode.com/todos/1');

    console.log(responce);
}

getData();