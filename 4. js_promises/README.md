# JavaScript Promises

## Why promises use?

Ans: Promise use for javaScript callback function. And asynchronous javaScript. Multiple callBack function make a function hell. This problem is solved by the JavaScript promise method.

## Promise Syntax:

    const paymentStatus = true; 

    // promise definition;

    const myPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            
            if(paymentStatus){
                resolve('Payment Success.');  // resolve method send by any data type value. array, object, string etc.; 
            }
            else{
                reject('Payment failed.');  // reject method send by any data type value.  array, object, string etc.;
            }

        }, 3000);
    });


    // promise call;

    myPromise
        .then(function(value){   // this value parameter value send by resolve parameter;
            console.log(value);
        })
        .catch(function(error){   // this error parameter value send by reject function;
            console.log(error);
        });