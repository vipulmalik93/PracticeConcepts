// by this we have formed closure of cunt with callback function so that no on ecan'r acces count from outside. 
function AddEventListener () {
    var  count = 0;

    document.getElementById('myButton4').addEventListener("click", function () {
        console.warn("Button clicked from EventListener3 file-->>", "count-->>", ++count );
    })
}


AddEventListener();



// In the above eventListener call back we have passed anonymous function so now in cas e when anonymous function gets passed we can't 
// remove the  listener because there’s no way to reference it afterward.

// Q. Is it mandatory to provide same callback function to remove event listener?
// Ans. Yes, ✅ it is mandatory to provide the same callback function to removeEventListener that you used in addEventListener.

// Why?
// removeEventListener needs:

    // 1. The same event type (e.g., "click"),
    // 2. The exact same function reference used earlier.

//   Fix: Use a named function inside AddEventListener, or store the function in a variable

// In EventListener6.js  file which is next file to this  we showed how to remove event listener.



