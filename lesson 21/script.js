'use strict';

// 1

function searchArrayWord(a, b) {

    for (let i = 0; i < b.length; i++) {
      if (b[i] == a) 
      return true;
    }
    return false;
}

console.log(searchArrayWord("Кот", ['Кот', 'Собака', 'Жираф' ]));

// 2

    let arr = [1, 2, 3, 7, 6, 9];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum /= arr.length;
    
    
console.log( sum );


//3

   let arr2 = [1, 3, 5, 6, 7, 9];
   let arrNoEmpty;
   for(let i=0, a = arr2.length-1; i < a; i++, a--)
   {
       arrNoEmpty = arr2[a];
       arr2[a] = arr2[i];
       arr2[i] = arrNoEmpty;
   }
   

console.log(arr2);


//4

let object = {

    html:'HTML',
    css: 'CSS',
    js: 'ECMA'

}, 

arr3 = [];

for(let key in object){
    arr3.push(object[key]);
}


console.log(arr3);
//5

let obj = { 
    'nameBuyer'   : "Thor",
    'phoneBuyer'  : "+380507531408",
    'adressBuyer' : "Bikini Bottom",
    'totalOrder'  : '830 UAH',
    'totalWeight' : "2700mg",
    'basket'      : [
        {
            'name'  : 'cup',
            'price' : '5',
            'weight': 200
        }, 
        {
            'name'  : 'spoon',
            'price' : '30',
            'weight': 100
        }, 
        {
            'name'  : 'kettle',
            'price' : '550',
            'weight': 2000
        },
         
        {
            'name'  : 'mug',
            'price' : '150',
            'weight': 400
        }
    ]
}

console.log(obj);