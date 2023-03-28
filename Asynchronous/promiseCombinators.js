const getJson = function (url, errMsg = 'something went Wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg}(${response.status})`);
    return response.json();
  });
};

// Promise.race

(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/italy`),
    getJson(`https://restcountries.com/v3.1/name/china`),
    getJson(`https://restcountries.com/v3.1/name/egypt`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => reject(new Error('request took too long')), sec * 1000);
  });
};

Promise.race([
  getJson(`https://restcountries.com/v3.1/name/india`),
  timeout(0.564),
])
  .then(res => console.log(res[0]))
  .catch(err => {
    console.error(err);
  });

//   Promise.all()

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve(' Another Success'),
])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });

//   Promise.allSettled()
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve(' Another Success'),
]).then(res => {
  console.log(res);
});

// Promise.any

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve(' Another Success'),
])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
