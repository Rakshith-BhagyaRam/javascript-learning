'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////////////////////////////////////////

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
     <p class="country__row"><span>🏛</span>${data.capital}</p>
        <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
        </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

//////////////////////////////////////////////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

//////////////////////////////////////////////////////////////////////////////

const getJson = function (url, errMsg = 'something went Wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg}(${response.status})`);
    return response.json();
  });
};

//////////////////////////////////////////////////////////////////////////////

/*

const getCountry = function (country) {

country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country Not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      generateCountry(...data);
      console.log(data);

      // country 2
      // const neighbour = data[0].borders?.[0];
      const neighbour = `szdxfcgvbhnm`;

      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}
      `)
        .then(response => {
          console.log(response);
          if (!response.ok)
            throw new Error(`Country Not found (${response.status})`);
          return response.json();
        })
        .then(data => {
          generateCountry(...data, 'neighbour');
          console.log(data);
        });
    })
    .catch(err => {
      console.error(`${err}💥💥💥💥`);
      renderError(`Something Went Wrong 💥💥 ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

*/

//////////////////////////////////////////////////////////////////////////////
const getCountry = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country Not found')
    .then(data => {
      generateCountry(...data);
      console.log(data);

      // country 2
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`No neighbouring Country Found!`);
      // const neighbour = `szdxfcgvbhnm`;

      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}
      `,
        'Country Not found'
      ).then(data => generateCountry(...data, 'neighbour'));
    })
    .catch(err => {
      console.error(`${err}💥💥💥💥`);
      renderError(`Something Went Wrong 💥💥 ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountry('india');
});
