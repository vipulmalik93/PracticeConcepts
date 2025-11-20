
// Filter retruns an array.

// M1
const arr = [5, 1, 3, 2 ,6];


function isOdd (x) {
    return x % 2;
}

const filter1 = arr.filter(isOdd);
console.warn("filter1:", filter1);


// M2

const filter2 = arr.filter(function greaterThanFour (x) {
      return x  > 4;
})
console.warn("filter2:", filter2);


// M3

const filter3 = arr.filter((x) => x > 4);
console.warn("filter3:", filter3);