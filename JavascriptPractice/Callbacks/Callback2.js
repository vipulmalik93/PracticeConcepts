var abc =10;
function xyz2 () {
    console.log("timer", abc,abc1, abc2 );
}
setTimeout( xyz2, 5000)

var abc1 =20;;

function xyz1 () {
   console.log("xyz1",abc,abc1, abc2)
}

function xyz () {
    console.log("xyz", abc,abc1, abc2)
    xyz1();
}

xyz(xyz1);
var abc2 =30;;

