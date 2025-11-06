console.log("start");

setTimeout(() => {
   console.warn("callback");
},5000)

console.log("end");

var startDate = new Date().getTime();
var endDate = startDate;


while(endDate < startDate + 10000) {
    endDate  = new Date().getTime();
}


console.warn("while Expires");




























// OUTPUT:
        // start
        // end
        // while expires
        // callback



// EXPLANATION:

        // setTimeout only schedules a callback—it doesn’t guarantee exact timing if JS is busy.
        // The while loop blocks the event loop, so the 5-second timeout is delayed until the loop ends.
        // JS is single-threaded, so blocking operations like while prevent other asynchronous tasks from running.


