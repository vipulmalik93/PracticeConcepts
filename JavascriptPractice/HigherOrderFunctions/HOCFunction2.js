// adding to the prototype...
// similar to the basic polyfill of map. Map function also creates a new array and than iterate over each of these elements in the radius and return the output.

const radius = [3, 1 ,2 , 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference =  function (radius) {
    return 2 * Math.PI * radius;
}


const diamater = function (radius) {
    return 2 * radius;
}

Array.prototype.calculate = function (logic) {
       const output = [];
       for(let i = 0; i < this.length; i ++) {
            output.push(logic(this[i]));
       }

       return output;
}


console.log("HOCF_PROTO:", radius.calculate(area));
console.log("HOCF_PROTO:", radius.calculate(circumference));
console.log("HOCF_PROTO:", radius.calculate(diamater));



