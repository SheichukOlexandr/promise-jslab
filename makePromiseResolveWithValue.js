/**
 * 
 * Should return promise with given value
 * 
 * @param {string} string - The input string
 * @returns {Promise<value>}
 */
function makePromiseResolveWith(value) {
    return Promise.resolve(value);
}

console.log(makePromiseResolveWith(5));
