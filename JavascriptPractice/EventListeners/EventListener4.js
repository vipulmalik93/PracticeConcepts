

document.getElementById('myButton2').addEventListener("click", function () {
    var  count = 0;
    console.warn("Button clicked from EventListener3 file-->>", "count-->>", ++count );
})

// in file Eventlistener4 the count is getting increased by every click but here it got increased by 1 on a click and than again gets 
// rest to 0 on second click and than again increased by 1 .