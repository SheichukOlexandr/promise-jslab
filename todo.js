// Use https://gorest.co.in/ REST API for Testing and Prototyping
// Write function to fetch data from https://gorest.co.in/public/v2/todos
// This function should print in console array of obects with the following structure {id, title, user_id, deu_on}
// and handle possible errors 

// put your code here
const fetch = require('cross-fetch');

async function fetchTodos() {
    try {
        const response = await fetch('https://gorest.co.in/public/v2/todos');
        const data = await response.json();
        if (data.code) {
            throw new Error(data.data.message);
        }
        console.log(data.data);
    } catch (error) {
        console.error('something wrong happened!', error.message);
    }
}

fetchTodos();