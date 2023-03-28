const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');
const imgContainer = document.querySelector('.images');

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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

/* Coding Challenge #1


In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
Your tasks:

PART 1
1. Createafunction'whereAmI'whichtakesasinputsalatitudevalue('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).
2. Do“reversegeocoding”oftheprovidedcoordinates.Reversegeocodingmeans to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉
3. Onceyouhavethedata,takealookatitintheconsoletoseealltheattributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”
4. Chaina.catchmethodtotheendofthepromisechainandlogerrorstothe console
5. ThisAPIallowsyoutomakeonly3requestspersecond.Ifyoureloadfast,you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message


PART 2

6. Nowit'stimetousethereceiveddatatorenderacountry.Sotaketherelevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Renderthecountryandcatchanyerrors,justlikewehavedoneinthelast lecture (you can even copy this code, no need to type the same code)
      The Complete JavaScript Course 30


Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude) § Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474



/////////////////////////// ************ Solution  ********** /////////////////////////////////////

const whereAmI = function (lat, lon) {
  fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`)
  .then(res => {
    if (!res.ok)
    throw new Error(`problem with GeoCodeing ${res.status}`);
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

btn.addEventListener('click', function () {
});

;
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

/*  Coding Challenge #2


For this challenge you will actually have to watch the video! Then, build the image loading functionality that I just showed you on the screen.
Your tasks:
Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own 😉
PART 1
1. Createafunction'createImage'whichreceives'imgPath'asaninput. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path
2. Whentheimageisdoneloading,appendittotheDOMelementwiththe 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise
3. Ifthispartistootrickyforyou,justwatchthefirstpartofthesolution
PART 2
4. Consumethepromiseusing.thenandalsoaddanerrorhandler
5. Aftertheimagehasloaded,pauseexecutionfor2secondsusingthe'wait'
function we created earlier
6. Afterthe2secondshavepassed,hidethecurrentimage(setdisplayCSS
  property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that 😉)
  7. Afterthesecondimagehasloaded,pauseexecutionfor2secondsagain
  8. Afterthe2secondshavepassed,hidethecurrentimage
  Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast
  GOOD LUCK 😀


  
  // solution
  
  const wait = sec => {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
  };
  
  const createImg = imgPath =>
  new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('img not found'));
    });
  });
  
  let currentImage;
  
  createImg('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image 1 is loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImg('img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('Image 2 is loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImg('img/img-3.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('Image 3 is loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.error(err));
  
  */

/*  Coding Challenge #3


Your tasks:
PART 1
1. Writeanasyncfunction'loadNPause'thatrecreatesChallenge#2,thistime using async/await (only the part where the promise is consumed, reuse the 'createImage' function from before)
2. Comparethetwoversions,thinkaboutthebigdifferences,andseewhichone you like more
3. Don'tforgettotesttheerrorhandler,andtosetthenetworkspeedto“Fast3G” in the dev tools Network tab
PART 2
1. Createanasyncfunction'loadAll'thatreceivesanarrayofimagepaths 'imgArr'
2. Use.maptoloopoverthearray,toloadalltheimageswiththe 'createImage' function (call the resulting array 'imgs')
3. Checkoutthe'imgs'arrayintheconsole!Isitlikeyouexpected?
4. Useapromisecombinatorfunctiontoactuallygettheimagesfromthearray😉
5. Addthe'parallel'classtoalltheimages(ithassomeCSSstyles)
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img- 3.jpg']. To test, turn off the 'loadNPause' function
GOOD LUCK 😀

*/

// solution

const wait = sec => {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
};

const createImg = imgPath =>
  new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('img not found'));
    });
  });

/**
 
              PART 1 
 
 */

const loadNPause = async function () {
  try {
    // Load Image 1
    let img = await createImg('img/img-1.jpg');
    console.log('image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load Image 2
    img = await createImg('img/img-2.jpg');
    console.log('image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load Image 3
    img = await createImg('img/img-3.jpg');
    console.log('image 3 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

/**
 
              PART 2
 
 */

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImg(img));
    console.log(imgs);

    const imgEle = await Promise.all(imgs);
    console.log(imgEle);
    imgEle.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
