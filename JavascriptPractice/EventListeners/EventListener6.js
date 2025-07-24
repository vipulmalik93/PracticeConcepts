function AddEventListener () {
    var count = 0;

    // define function in a variable
    function handleClick() {
        console.warn("Button clicked from EventListener3 file-->>", "count-->>", ++count);
        
        // Example: remove after 3 clicks or we can use setTime out or anything or nothing it is upto us.
        if (count >= 3) {
            document.getElementById('myButton5').removeEventListener("click", handleClick);
            console.warn("Event listener removed after 3 clicks.");
        }
    }

    // add listener
    document.getElementById('myButton5').addEventListener("click", handleClick);
}

AddEventListener();
