    
"use strict";

//1
/*
function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(5));
*/


function fib2(n){
    let a=1, b=1 ;

    for(let i = 3; i <= n; i++){
        let c = a + b;
            a = b; 
            b = c;

    }
    return b;
}

console.log(fib2(10));


//2

let n = 0;
let m = 1000;

for(n = 0; m > 50; n++ ){   
    m /= 2;  
}
console.log(n);