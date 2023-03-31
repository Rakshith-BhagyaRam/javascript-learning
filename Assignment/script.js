//       Write fetch API and retrieve response of given URL.
// URL
// https://iplayon-1xqo.onrender.com/usersTT
// HTTP Type - POST

// Payload/Body params
// {
//     "apiUser": "KTTA1",
//     "apiKey": "dd5e611bf286042db7257ee998e5112b",
//     "op": "getUser"
// }

const address = document.querySelector(".address");

function generateUser(data) {
  const html = `
    <article class="user">
        <div class="user-address">
            <h3 class="user__nam}e">Name : ${data.userName}</h3>
            <h3 class="user__id}e">User ID : ${data.userId}</h3>
            <h4 class=v"user__gender">Gender : ${data.gender}</h4>
            <h4 class=v"user__phone">Phone Number :${data.phoneNumber}</h4>
            <h4 class=v"user__city">City : ${data.city}</h4>
            <h4 class=v"user__pin">PinCode : ${data.pinCode}</h4>
            <h3 class="user__country__nam}e">Country : ${data.country}</h3>
            </div>
    </article>`;

  address.insertAdjacentHTML("beforeend", html);
  address.style.opacity = 1;
}

fetch("https://iplayon-1xqo.onrender.com/usersTT", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    apiUser: "KTTA1",
    apiKey: "dd5e611bf286042db7257ee998e5112b",
    op: "getUser",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.result[1]);

    generateUser(data.result[2]);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
