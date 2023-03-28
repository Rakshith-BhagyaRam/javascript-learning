'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////////////////////////////
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

function getCountryAndNeighbour(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render Country 1

    generateCountry(data);

    // get neighbour country

    const [neighbour] = data.borders;
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${neighbour}`
    );
    request2.send();

    request2.addEventListener('load', function () {
        // console.log(this.responseText)
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      generateCountry(data2, `neighbour`);
    });
  });
}
getCountryAndNeighbour('usa');


