'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ////////////////////////////////////////////////////////////////////////////
function generateCountry(data, neigh) {
  const html = `
    <article class="country ${neigh}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__nam}e">${data.name.common}</h3>
            <h4 class=v"country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
            <p class="country__row"><span>💰</span>${data.currencies.name}</p>
        </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

/*
promise - (ES6 feature)
    *  the object that is used as a placeholder for the future result of an Asynchronousoperation
    *  A container for an Asynchronous delivered value
    *  A container for a future value
            **  future value = Response from a AJAX call

    // time sensitive
*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
// fetch Function

// const request = fetch('https://restcountries.com/v3.1/name/india');
// console.log(request); // it returns the Promises

//
//
//
//
//
//
// we use then method to fullfill the promise

// full code

// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       generateCountry(data[0])
//     });
// };

// getCountry('india');

// optimised code
const getCountry = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => generateCountry(data[0]));
};

getCountry('portugal');
