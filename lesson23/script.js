'use strict';

//1 

let time = new Date();

let hours = 23 - time.getHours();
let minutes =  59 - time.getMinutes();
let seconds =  59 - time.getSeconds();

console.log(`До конца дня осталось ${hours} : ${minutes} : ${seconds}` );


//2

let time1 = new Date();
let time2 = new Date(time1.getFullYear(), time1.getMonth(), time1.getDate());

let result = Math.round((time1-time2) / 1000);

console.log(result);


//3


function getWeekDay(date) {
  let days = ['Воскресениe', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[date.getDay()];
}

let date = new Date(2013, 0, 25); 

console.log( getWeekDay(date) ); 


//4


function daysOst() { 
  let dr = prompt('Введите дату вашего рождения. Пример: 2004 22 03', '');

  let birthday = new Date(Date.parse(dr));
  let today = new Date();
  let nDate = birthday.setFullYear(today.getFullYear());
  if (nDate < today) {
    birthday.setFullYear(today.getFullYear()+1);
  }
  let allSec = 24*60*60*1000; 
  let dayswait = Math.round((birthday.getTime() - today.getTime())/allSec);
  
  console.log(`До вашего дня рождения осталось ${dayswait} дней`);
  }

  daysOst();