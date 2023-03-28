const getJson = function (url, errMsg = 'something went Wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg}(${response.status})`);
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([...data1.capital, ...data2.capital, ...data3.capital]);

    const data = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.flatMap(country => country[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('russia', 'nepal', 'pak');
