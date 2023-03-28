
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__nam}e">${data.name.common}</h3>
    <h4 class=v"country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>


        <p class="country__row"><span>🗣️</span>${data.languages.tam}</p>
        <p class="country__row"><span>💰</span>${data.currencies.name}</p>

        
        </div>
        </article>
        `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// our First AJAX Call: XMLHttpRequest()

const getCountryAndNeighbour = function (country) {
  //
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render Country 1
    renderCountry(data);

    // get Neighbour Country
    for (const neighbour of data.borders) {
      // const [neighbour] = data.borders
      if (!neighbour) return;

      // AJAX call country 2
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function () {
        const [data2] = JSON.parse(this.responseText);
        console.log(data2);
        renderCountry(data2, 'neighbour');
      });
    }
  });
};
// getCountryAndNeighbour(`india`);
getCountryAndNeighbour(`sri lanka`);
// getCountryAndNeighbour(`germany`);

// setTimeout(() => {
//   console.log('1 second Passed');
//   setTimeout(() => {
//     console.log('2 seconds Passed');
//     setTimeout(() => {
//       console.log('3 seconds Passed');
//       setTimeout(() => {
//         console.log('4 seconds Passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// // ***  promise

// // handling fullfilled promisses  by .then() method
// const request = fetch('https://restcountries.com/v3.1/name/india');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       // to read the response we should call the JSON method on response
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };