function Counter () {
    var count = 0;
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
counter1.count = 999;
counter1.incrementCounter();






























// OUTPUT:


// OUTPUT:
    // 1








// var counter1  = new Counter(); 
// when we did this refers to the newly created object counter1 (because you used the new keyword).

// It will print 1 becaue  here inCrement Counter is increasing the private count variable no to the count which we have added later.
//  Thhe count which we have added later got attached to the counter1 object's property and aslo this of object. Thna why cour increment
// function increases that one not the later one and why the later one overrides and changes the first counter? It is because in 
// the count which we declared inside the counter is it's private variable and is availabe through closure to increment counter.
// and also at incrementCounter we are increasing that private variable not  to that count which we have added later because we are doing count++
//  and to increase the added variable we have to do this.count++ becaue it got attached to the object.





