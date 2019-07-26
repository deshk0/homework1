    
"use strict";

//1

function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(5));

//2

let n = 0;
let m = 1000;

for(n = 0; m > 50; n++ ){   
    m /= 2;  
}
console.log(n);