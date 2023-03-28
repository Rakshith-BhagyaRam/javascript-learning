const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery Draw Results');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You won 💰');
    } else {
      reject(new Error('you Lost'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// promisifying setTimeout
const wait = sec =>
  new Promise(resolve => {
    setTimeout(resolve, sec * 1000);
  });

wait(1)
  .then(() => {
    console.log('1 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 sec passed');
    return wait(1);
  })
  .then(() => console.log('5 sec passed'));

Promise.resolve('abc').then(x => {
  console.log(x);
});
Promise.reject(new Error('Help! enemy ahead !!')).catch(x => {
  console.error(x);
});
