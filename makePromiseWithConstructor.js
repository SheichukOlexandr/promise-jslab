/**
 * 
 * the promise should resolve or reject depending on itShouldResolve value
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve) {
    return new Promise((resolve, reject) => {
        if (itShouldResolve) {
            resolve();
        } else {
            reject();
        }
    });
}

makePromiseWithConstructor(true)
    .then(() => console.log("Виконано"))
    .catch(() => console.log("Відхилено"));
