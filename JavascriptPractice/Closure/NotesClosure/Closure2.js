function xyz () {
    var i= 1;
    setTimeout(() => {
    console.log("i:", i)
    console.log(this);
    }, 3000)
}

xyz();



// OUTPUT:

// 1 
// window{}   -> points to window object
// it got prints after 3 second