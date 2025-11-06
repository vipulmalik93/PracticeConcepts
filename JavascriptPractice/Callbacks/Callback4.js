console.log("start");

setTimeout(() => {
  console.log("callback");
},0);


console.log("end");


























// OUTPUT:
      // start
      // end
      // callback




// EXPLANATION:


      // setTimeout(fn, 0) does not run immediately; it just schedules fn to run after the current code.
      // JS is single-threaded, so synchronous code always runs first.
      // Event loop ensures asynchronous callbacks run after the synchronous code finishes.