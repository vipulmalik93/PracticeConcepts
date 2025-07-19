
function Counter () {
    var count = 0;  // PRIVATE variable (not accessible from outside or via `this`)
    this.incrementCounter = function () {
        count++;  // increase PRIVATE count
        this.count++;  // increase PUBLIC count (attached to object)
        console.log("privateCount:",count);
        console.log("objectCount:",this.count);
    }

    this.decrementCounter = function () {
        this.count--; // decrease PUBLIC count
        console.log("objectCount:",this.count);
        console.log("privateCount:",count);
    }
}


var counter1  = new Counter();
counter1.count =999;
counter1.incrementCounter();

// OUTPUT:
// privateCount: 1
// objectCount: 1000
