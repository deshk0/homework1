'use strict'

//1

function isNumberInRange( a ){
    if(a > 0 && a < 10){
        return true
    }

    else{
        return false
    }
}

console.log((isNumberInRange(prompt("Ввведите число", ""))));

//2

function isEven( a ){
    if( a % 2 == 0 ){
        return true
    }else{
        return false
    }

}

console.log((isEven(prompt("Ввведите число", ""))));

//3


let value = +prompt('value?', '');

switch(value){
    case 0:
        alert( 0 )
        break;
    case 1:
        alert( 1 )
        break;
    case 2:
    case 3:    
        alert( '2,3' );
        break;
    default:
        console.log('Выберете число от 1 до 3')
}

//4

function min( a, b ){
    if( a > b ){
        return b
    }else{
        return a
    }
}

console.log(min(5, -1))