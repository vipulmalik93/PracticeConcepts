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


