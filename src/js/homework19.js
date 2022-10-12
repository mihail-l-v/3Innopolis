'use strict';

//упражнение №1
let a = '$100';
let b = '300$';

let sum = +a.slice(1) + +parseInt(b) ;

console.log(sum);//должно быть 400

//упражнение №2
let message = ' привет, медвед      ';

message = message.trim();
message = message[0].toUpperCase() + message.slice(1);

console.log(message); // “Привет, медвед”

//упражнение №3
let age = +prompt("Сколько вам лет?",'');
function ask_age(age) {
  let status;
  if(age >=0  && age <= 3){
    status = 'младенец';
  } else if(age >=4  && age <= 11){
    status = 'ребенок';
  } else if(age >=12  && age <= 18){
    status = 'подросток';
  } else if(age >=19  && age <= 40){
    status = 'познаете жизнь';
  } else if(age >=41  && age <= 80){
    status = 'познали жизнь';
  } else if(age >=81){
    status = 'долгожитель';
  } else {
    return 'неверные данные'
  }
  return `Вам ${age} и вы ${status}`;
}

console.log(ask_age(age));

//упражнение №4
let message4 = 'Я работаю со строками как профессионал!';

let count = message4.split(' ').length;
console.log(count);

