/* === function sequence === */
function first() {
    console.log("This is our first topic.");
}


function second() {
    console.log("This is our second topic.");
}


second();  // first call this function. output:- 'This is our second topic.'; 
first();   // second call this function. 'This is our first topic.';


/* === Function sequence control === */

// example first type:-
function display(sum) {
    console.log(sum);
}

function addition(num1, num2) {
    let sum = num1 + num2;

    return sum;
}

const result = addition(5, 5);

display(result);   // return output 10;


// example second type:-
function display2(sum) {
    console.log(sum);
}

function addition2(num1, num2) {
    let sum = num1 + num2;

    display2(sum);
}

addition(5, 5);   // return output- 10

/* 
Note:  
This is not the correct way to write the functions. 
Because in this case one function depends on another function. 
It can never be best practice.
So, callback function should be used in this case.
*/

/* === Callback function === */

// this is callback function
function display3(some) {
    console.log(some);
}


function addition3(num1, num2, callBack) {
    let sum = num1 + num2;

    // callback parameter is a function
    if (callBack) callBack(sum);

    return sum;
}

// display three is a callback function;
addition3(10, 10, display3);  // return output - 20;

/* --------- */

let result2 = addition3(10, 10);
display3(result2); // return output - 20;

