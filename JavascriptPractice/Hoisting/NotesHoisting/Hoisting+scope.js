function abc () {
    var b = 20;
    var test =100;
    xyz();
    function xyz () {
          var c = 30;
        //    we write this line of b's requirement in xyz as here we wrote console.log(b) only if any variable of it's parent is 
        // required in child function on;y that variable will come inside closure as here if we comment out console.log(b) and sees in
        //  browser only b is there in closure not test variable. and aslo if we don't require any thing in child than no closure is there see it in browser.
          console.log(b);
    }
}

var a = 10;

abc();