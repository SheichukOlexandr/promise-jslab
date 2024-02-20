/**
 * 
 * Should return a promise that resolves with the value after delayInMs
 *
 * @param {any} value 
 * @param {number} delay 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function job(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`виконано ${delay}`);
        }, delay);
    });
}

// Run 'job' function with delays 1000, 2000, 500, 1500 and 
// use Promise.all to print `done ${delay}` in console when every task is done

Promise.all([job(1000), job(2000), job(500), job(1500)])
    .then((results) => {
        results.forEach((result) => console.log(result));
});
