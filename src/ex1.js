function outer() {
    let b = 10;
    //console.log(a + b);        // a is not defined
    function inner() {
        var a = 20; 
        console.log(a+b);        // never gets executed
    }
    return inner;                // returns the reference of the inner
 }
 let rf = outer();
 console.log( rf );

 // In our example, the inner function had preserved the value of b=10 when the outer() function 
 // was executed, and continued to preserve (closure) it.
 rf();                           // 30




