console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => console.log("Promise inside Timeout"));
}, 0);
setTimeout(() => {
  console.log("Timeout 100");

}, 0);

Promise.resolve().then(() => console.log("Promise 1"));

console.log("End");



























// OUTPUT:

        // Start
        // End
        // Promise 1
        // Timeout 1
        // Promise inside Timeout
        // Timeout 100