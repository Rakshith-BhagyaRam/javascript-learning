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
        <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
        <p class="country__row"><span>💰</span>${data.currencies.name}</p>
        </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
}

//////////////////////////////////////////////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

//////////////////////////////////////////////////////////////////////////////

const getCountry = function (country) {
  //
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      generateCountry(data[0]);
        console.log(data);

      // country 2
      const neighbour = data[0].borders?.[0];
      //   console.log(neighbour)
      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}
      `)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          generateCountry(data[0], 'neighbour');
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
btn.addEventListener('click', function () {
  getCountry('sri');
});
