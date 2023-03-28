const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class=v"country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>


        <p class="country__row"><span>🏛</span>${data.capital}</p>
        <p class="country__row"><span>💰</span>${data.currencies.name}</p>

        
        </div>
        </article>
        `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//
//
//
//
//

const getCountry = function (country) {
  //
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      // country 2
      const neighbour = data[0].borders?.[0];
      fetch(`https://restcountries.com/v3.1/name/${neighbour}
      `)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          renderCountry(data[3], 'neighbour');
        });
    });
};

getCountry('usa');
