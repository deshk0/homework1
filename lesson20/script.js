"use strict";

//1

let a = 1;

if( a === '1' ){
    console.log('Верно')
}else{
    console.log('Неверно')
}

//2

//Длинная

let item = true;

if( item != true ){
    console.log('Верно')
}else{
    console.log('Неверно')
}

//Короткая

let access = ( item != true ) ? console.log('Верно') : console.log('Неверно');

//3

a = -3;

if( a > 0 && a < 0.25 ){
    console.log('Верно')
}else{
    console.log('Неверно')
}

//4

a = 4;
let b = 1;

if( a > 3 && a < 12 || b >= 7 && b < 15 ){
    console.log('Верно')
}else{
    console.log('Неверно')
}

//5

let month = 13;

if( month == 12 || month == 1 || month == 2){
    console.log('Зима')
}else if(month == 3 || month == 4 || month == 5){
    console.log('Весна')
}else if(month == 6 || month == 7 || month == 8){
    console.log('Лето')
}else if(month == 9 || month == 10 || month == 11){
    console.log('Осень')
}else{
    console.log('Такого нету)')
}

//6


for(let i = 0; i <= 100; i++){
    if(i%2 == 0) {
        console.log(i);
        
    }
    continue;
}






