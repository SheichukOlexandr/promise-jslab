/**
 * 
 * Should return promise with error
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
    return Promise.reject("Boo!");
}

console.log(makePromiseRejectWithBoo());
