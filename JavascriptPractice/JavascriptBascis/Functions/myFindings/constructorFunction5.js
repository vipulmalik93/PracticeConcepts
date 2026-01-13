function Counter () {
    var count = 0;
    console.log("internal--console-count:",count)
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }

    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}


var counter1  = new Counter();
console.log("----------A---------")
counter1.count = 999;
console.log("----------B---------")
counter1.incrementCounter();
console.log("----------C---------")
Counter();
console.log("----------D---------")

console.log(Counter);
console.log("----------E---------")
console.log(Counter());




























// OUTPUT:


// OUTPUT:

        // internal--console-count: 0

        //  ----------A---------

        //  ----------B---------

        //              1

        //  ----------C---------

        //  internal--console-count: 0

        //  ----------D---------

        //  ƒ Counter () {
        //     var count = 0;
        //     console.log("internal--console-count:",count)
        //     this.incrementCounter = function () {
        //         count++;
        //         console.log(count);
        //     }

        //     this.decrementCount…

        //  ----------E---------
        
        //  internal--console-count: 0
        //  undefined








// var counter1  = new Counter(); 
// when we did this refers to the newly created object counter1 (because you used the new keyword).

// It will print 1 becaue  here inCrement Counter is increasing the private count variable no to the count which we have added later.
//  Thhe count which we have added later got attached to the counter1 object's property and aslo this of object. Thna why cour increment
// function increases that one not the later one and why the later one overrides and changes the first counter? It is because in 
// the count which we declared inside the counter is it's private variable and is availabe through closure to increment counter.
// and also at incrementCounter we are increasing that private variable not  to that count which we have added later because we are doing count++
//  and to increase the added variable we have to do this.count++ becaue it got attached to the object.





