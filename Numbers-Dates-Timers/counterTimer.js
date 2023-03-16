const startLogOutTimer = function () {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart('2', 0);
    const sec = String(Math.trunc(time % 60)).padStart('2', 0);

    //in each call  back call print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when time is 0 seconds (or) after the time expires  stop Timer and LogOut the user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 0;
    }
    
      // decrease 1 sec
      time--;
  };

  // set time to 5 min
  let time = 30;

  // call timer every sec
  tick();
  const timer = setInterval(tick, 1000);
  return timer
};
