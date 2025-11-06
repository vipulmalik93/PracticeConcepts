setTimeout(function() {
    console.log("timer");
}, 5000)

function xyz1 () {
   console.log("xyz1")
}

function xyz () {
    console.log("xyz")
    xyz1();
}

xyz();


























// OUTPUT:

        // xyz
        // xyz1