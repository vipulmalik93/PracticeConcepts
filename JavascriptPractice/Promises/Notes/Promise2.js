
const dummyPromise1 = new Promise(()=>{});
console.log("dummyPromise1--->>", dummyPromise1);



const dummyPromise2 = new Promise((resolve, reject) => {
    // You can resolve or reject here
    resolve("Dummy resolved value");
  });
console.log("dummyPromise2--->>", dummyPromise2);


const dummyPromise3 = new Promise((resolve, reject) => {
    // You can resolve or reject here
    reject("Dummy3 value rejected");
  });
console.log("dummyPromise3--->>", dummyPromise3);
dummyPromise3.then(() => console.warn("dummyPromise3-->> is in then block"));


// the above dummyPromise3 gives this warning console Promise2.js:16 Uncaught (in promise) Dummy value rejected
// To remove that warning we have to use catch
// You rejected the promise, but you didn’t handle the rejection. In JavaScript, unhandled promise rejections
//  throw warnings or errors.

// | Problem                    | Fix                             |
// | -------------------------- | ------------------------------- |
// | `reject()` is called       | Use `.catch()` or `try...catch` |
// | No error handling attached | You get `Uncaught (in promise)` |




const dummyPromise4 = new Promise((resolve, reject) => {
    // You can resolve or reject here
    reject("Dummy4 value rejected");
  });
console.log("dummyPromise4--->>", dummyPromise4);
dummyPromise4
    .then(() => console.warn("dummyPromise4-->> is in then block"))
    .catch(() => console.warn("dummyPromise4-->> is in catch block"));



    const dummyPromise5 = new Promise((resolve, reject) => {
        // You can resolve or reject here
        resolve("Dummy5 value resolved");
      });
    console.log("dummyPromise5--->>", dummyPromise5);
    dummyPromise5
        .then(() => console.warn("dummyPromise5-->> is in then block"))
        .catch(() => console.warn("dummyPromise5-->> is in catch block"));



        const dummyPromise6 = new Promise((resolve, reject) => {
            // You can resolve or reject here
            resolve("Dummy6 value resolved");
          });
        console.log("dummyPromise6--->>", dummyPromise6);
        dummyPromise6
            .then(() => console.warn("dummyPromise6-->> is in then block"))
            .catch(() => console.warn("dummyPromise6-->> is in catch block"))
            .finally(() => console.warn("dummyPromise6-->> is in final block"));



            const dummyPromise7 = new Promise((resolve, reject) => {
                // You can resolve or reject here
                reject("Dummy7 value resolved");
              });
            console.log("dummyPromise7--->>", dummyPromise7);
            dummyPromise7
                .then(() => console.warn("dummyPromise7-->> is in then block"))
                .catch(() => console.warn("dummyPromise7-->> is in catch block"))
                .finally(() => console.warn("dummyPromise7-->> is in final block"));



// --------------------------------------------------------------------------------------------------------------- //

                // 1.  This creates a pending promise because the executor function ()=>{} never calls resolve() or reject().
                // 2. A pending promise never settles, meaning .then, .catch, and .finally callbacks will never run.

                const dummyPromise8 = new Promise(()=>{});
                console.log("dummyPromise8--->>", dummyPromise8);
                dummyPromise8
                .then(() => console.warn("dummyPromise8-->> is in then block"))
                .catch(() => console.warn("dummyPromise8-->> is in catch block"))
                .finally(() => console.warn("dummyPromise8-->> is in finally block"))
                ;





    
