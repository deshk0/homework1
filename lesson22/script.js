'use strict';

//1

let arr = [36, -5, 121, -2, 0, -3, 25, -14];

let result = arr.filter(function(number) {
    return number > 0;
  });

result = result.map(function(item) {
  return  Math.sqrt(item);
});


console.log(result); 


//2

arr = [4, 3, 5, 5, 0, 4, 8, 6];

result = arr.reduceRight(function(sum, current ) {
    if (current == 0) {
		return false;
  } 
  return sum + current;
  }, 0);
  
  
console.log( result );

//3


function summArguments() {
  let summ = 0;
  for(let i = 0; i < arguments.length; i++){
  summ+=arguments[i];
}
  return summ;
}


console.log(summArguments(10, 1, 2, 5) );
console.log(summArguments(10));