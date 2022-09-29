# JavaScript callback function

## Function Sequence:

JavaScript function are executed in the sequence they are called (invoke). Not follow this function definition sequence.    

## Sequence control: 

When a function is defendant another function, the sequence must be maintained when calling the function.

### Note:  

This is not the correct way to write the functions.

Because in this case one function depends on another function. 

It can never be best practice.

So, callback function should be used in this case.


## callback function:

A callback is a function passed an argument to another function. 
In this case one function does not depend on another function.

## Example:-

    function display(some){

        console.log(some);

    }

    function addition(num1, num2, callBack){

        let sum = num1 + num2;

        if(callBack) callBack(sum);

        return some;

    }

    // function invocation
    addition(10, 10, display);

    output: 20


