function outest (xyz1) {
    var a1 =10;
    let a2 = 20; 
    function outer (xyz2) {
        var b1 = 100;
        let b2 = 200;

        function inner (xyz3) {
            var c1 = 1000;
            let c2 =2000;


            console.warn(a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, xyz1, xyz2, xyz3)


        }


        var b3 =300;
        let b4 = 400;


        return inner;

    }


    var a3 =  30;
    let a4 = 40;

    return outer;

}


var close = outest("Hiii")("Hello");
close("vipul");