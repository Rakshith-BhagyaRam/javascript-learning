const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');

function renderCountry(data, neigh) {
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
  countriesContainer.style.opacity = 1;
}

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position =>resolve(position),
    //   err => reject(err)
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};


  //   fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
  //     console.log(res)
  //   );
  
const whereAmI = async function () {
  // Gelocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lon } = pos.coords;

  // reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // country data


  const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);


  const data = await res.json();
  console.log(...data);
  renderCountry(data[0]);
};

btn.addEventListener('click', function () {
  whereAmI();
});
