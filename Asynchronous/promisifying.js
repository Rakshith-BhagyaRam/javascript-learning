'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position =>resolve(position),
    //   err => reject(err)
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { longitude: lat, longitude: lon } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`problem with GeoCodeing ${res.status}`);
      // console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error('country doesnot exist');
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
};

btn.addEventListener('click', whereAmI);
