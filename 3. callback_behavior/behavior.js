/* ============= call back behavior ============= */

const payment = true;

// enroll process;
function enroll(callback) {
    console.log('Course enrollment is process.....');

    setTimeout(function () {
        if (payment) {
            callback();
        }
        else {
            console.log('Sorry, your payment is failed.');
        }
    }, 2000);

}


const courseMark = 90;

// progress process;
function progress(callback) {
    console.log('Course on progress....');

    setTimeout(function () {
        if (courseMark >= 80) {
            callback();
        }
        else {
            console.log('Sorry, your mark is low. So sad.');
        }
    }, 3000);
}


const name = 'rhim';

// getCertified process;
function getCertified(callback) {
    console.log('certification is process...');

    setTimeout(function () {
        if (name === 'rahim') {
            callback();
        }
        else {
            console.log("who are you? I don't know who are you.");
        }
    }, 4000);
}


// certification process;
function certification() {
    console.log('Complete certification. Thank you.');
}


// call function
enroll(function () {
    progress(function () {
        getCertified(certification);
    });
});


