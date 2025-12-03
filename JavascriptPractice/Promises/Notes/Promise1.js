// A promise is an object representing the eventual completion or failure of an asynchronous operations.
// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks 
// into functions.

// STATE: Pending, Fullfilled, Rejected
// METHODS: then, catch, finally

// SYNTAX:

let promise = new Promise((resolve , reject) => {

    // async operation..

    if(success) {
        resolve(result);
    } else {
        reject(error);
    }

});

promise
   .then((result) => {handleSuccess})
    .catch(error => {handleError})
    .finally(() => {CleanUp})
