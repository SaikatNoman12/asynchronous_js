
/* ==== JavaScript Promises syntax ==== */

console.log('js 1');
console.log('js 2');


const paymentStatus = true;

// promise definition
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (paymentStatus) {
            resolve('Your payment process is success. js 3.');
        }
        else {
            reject('Your payment process is failed.');
        }
    }, 4000);
});


// call promise
promise
    .then(function (value) {
        console.log(value);
    })
    .catch(function (value) {
        console.log(value);
    });


console.log('js 4');




/* ========== 
JavaScript promise example.
This example is any course enrollment, progress, and certificate system;  
========== */



