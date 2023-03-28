console.log('Start test');
setTimeout(() => console.log('0 sec'), 0);   // asynch timeout
Promise.resolve('Resolved promise 1').then(res => {
  console.log(res); //microTask queue
});
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res); //microTask queue
});
console.log('End Test');
