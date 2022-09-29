# JavaScript async/await

## what is js async/await ?
Ans: async and await make promises easier to write.And 'async' makes a function return a Promise
'await' makes a function wait for a Promise .

## Syntax:

    // async syntax:-

    async function myFunction(){
        return Promise.resolve("Hello!");
    }

    //await syntax:-

    const value = await myFunction();

    console.log(value);   

## output:

    Hello!


## Example:

    async function firstFunc(){

        const promise = new promise(function(resolve, reject){

            // code;

        });

        return promise;

    }

    
    async function secondFunc(){

        const promise = new promise(function(resolve, reject){

            // code;

        });

        return promise;

    }


    // use await;

    function awaitFunc(){

        try{
            await firstFunction();

            const massage = await secondFunc();

            console.log(massage);

        }
        catch( rejectValue ){
            console.log( rejectValue );
        }

    }


    awaitFunc();