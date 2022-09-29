
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

const paymentSuccess = true;
const finishScore = 80;


function enroll() {
    console.log('Your enrollment is processing.');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            }
            else {
                reject('Your payment is failed.');
            }
        }, 2000);
    });

    return promise;
}


function progress() {
    console.log('Course on progress');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (finishScore >= 80) {
                resolve();
            }
            else {
                reject('Sorry, Your mark is low.');
            }
        }, 3000);
    });

    return promise;
}


function getCertified() {
    console.log('Your certificate is on progress.');

    // promise definition; 
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Yahooo! Your are certified programmer.');
        }, 4000);
    });

    return promise;
}


enroll()
    .then(progress)
    .then(getCertified)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    });
