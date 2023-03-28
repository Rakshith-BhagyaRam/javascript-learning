// callback Hell - The recursive call backs of AJAX are called as callback Hell 



setTimeout(() => {
  console.log('1 second Passed');
  setTimeout(() => {
    console.log('2 second Passed');
    setTimeout(() => {
      console.log('3 second Passed');
      setTimeout(() => {
        console.log('4 second Passed');
        setTimeout(() => {
          console.log('5 second Passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);



// it make our code hard to maintain and difficult