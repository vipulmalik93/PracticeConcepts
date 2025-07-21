function AddEventListener () {
    var  count = 0;

    document.getElementById('myButton2').addEventListener("click", function () {
        console.warn("Button clicked from EventListener3 file-->>", "count-->>", ++count );
    })
}


AddEventListener();



