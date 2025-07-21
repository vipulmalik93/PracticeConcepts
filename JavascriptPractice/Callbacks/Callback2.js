var abc =10;
function xyz2 () {
    console.log("timer");
}
setTimeout( xyz2, 5000)

var abc1 =20;;

function xyz1 () {
   console.log("xyz1")
}

function xyz () {
    console.log("xyz")
    xyz1();
}

xyz(xyz1);
var abc2 =30;;

