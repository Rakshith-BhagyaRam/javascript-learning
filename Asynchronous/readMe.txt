synchronous Code - 

* most code is synchronous 
* these code executed line by line;
* Each line of code waits for previous line to finish;
* Long running operations block the code execution

Asynchronous code -

* Asynchronous code is executed after a task that runs in the "background" finishes;
* Asynchronous code is non blocking;
* execution doesn't wait for an Asynchronous task to finish its work 
* callback functions alone do NOT make code Asynchronous!



AJAX - Asynchronous JavaScript And XML :- allows us to communicate with remote web servers in an Asynchronous way. With AJAX calls, we can request data from web servers dynamical ( without reloading the page we can use that data ).


API - Application Programming Interface 


callback Hell - The recursive call backs of AJAX are called as callback Hell 




promise - (ES6 feature)
    *  the object that is used as a placeholder for the future result of an Asynchronousoperation
    *  A container for an Asynchronous delivered value
    *  A container for a future value
            **  future value = Response from a AJAX call

    // time sensitive

    .then method -- is called only the promises if fullfilled 
    .catch method -- is only called ehile the promises is rejected
    .finally method -- the callback function which is defined in this is called always


