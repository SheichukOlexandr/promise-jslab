// For all exercises, if an error occurs we want to `console.err('something wrong happened!')`
// 1: Print " 1 C D" by using callbacks with `addStringWithCallback()`
// 2: Print " 2 C D" by using promises with `addStringWithPromise()`
// 3: Print " 3 C D" by using async/await with `addStringWithPromise()`

function addStringCallback (previous, current, callback) {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        callback(new Error('error!'));
      } else {
        callback(null, previous + ' ' + current);
      }
    }, Math.floor(Math.random() * 100));
}
  
function addStringPromise (previous, current) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error('error!'));
        }
        resolve(previous + ' ' + current);
      }, Math.floor(Math.random() * 100));
    })
}

// put your code here
// 1: Вивести " 1 C D" використовуючи зворотні виклики з `addStringWithCallback()`
addStringCallback('', '1', (err, result) => {
  if (err) {
      console.error('something wrong happened!');
  } else {
      console.log(result + ' C D');
  }
});

// 2: Вивести " 2 C D" використовуючи обіцянки з `addStringWithPromise()`
addStringPromise('', '2')
  .then(result => console.log(result + ' C D'))
  .catch(err => console.error('something wrong happened!'));

// 3: Вивести " 3 C D" використовуючи async/await з `addStringWithPromise()`
async function printAsync() {
  try {
      const result = await addStringPromise('', '3');
      console.log(result + ' C D');
  } catch (err) {
      console.error('something wrong happened!');
  }
}

printAsync();