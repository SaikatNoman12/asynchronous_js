/* ==== javaScript async / await ==== */

const paymentSuccess = true;
const courseProgress = 80;

// course enroll;
function enroll() {
    console.log('Your enrollment in process.');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            }
            else {
                console.log("Sorry, your payment is failed.");
            }
        }, 2000);
    });

    return promise;
}


// course progress;
function progress() {
    console.log('Your progress is on process.');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (courseProgress >= 80) {
                resolve();
            }
            else {
                console.log('Sorry, your mark is low.');
            }
        }, 3000);
    });

    return promise;
}


// course certification. I write code shortly;
function getCertification() {
    console.log('Your certification is on progress.');

    const promise = Promise.resolve('Congratulations! You are certified programmer.');

    return promise;
}


/* === use async/await === */
async function course() {
    try {

        await enroll();
        await progress();
        const massage = await getCertification();  // this is send a value;

        console.log(massage);

    } catch (reject) {
        console.log(reject);
    }
}

course();
