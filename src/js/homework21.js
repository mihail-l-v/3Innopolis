'use strict';
//Упражнение №1
//Напишите функцию isEmpty(obj), которая возвращает true,если у объекта нет свойств, иначе false.
 //Должна корректно работать абсолютно для любого объекта. Добавьте для данной функции комментарий в виде JSDoc с описанием того,
 //что она делает, какие параметры принимает и что возвращает.

const object = {
  // userName: 'John',
};

/**
 * Check any object
 * @param {object} nameObeject
 * @returns true if object is empty
 */
 function isEmpty(nameObeject) {
  for (let key in nameObeject) {
    return false;
  }
  return true;
}

console.log(isEmpty(object));

//Задание №3
//Необходимо написать функцию raiseSalary(perzent),которая позволит произвести повышение зарплаты на определенный процент и будет возвращать объект с новыми зарплатами.
//Например, если мы передаем внутрь этой функции число 5, тозарплата каждого сотрудника должна быть повышена на 5%(применить округление до целого числа в меньшую сторону)
//После чего необходимо вывести в консоль общий бюджетнашей команды, т.е. суммарное значение всех зарплат после изменения. Добавить для этой функции описание в форматеJSDoc.
let salaries = {
  John:100000,
  Ann:160000,
  Pete:130000,
};

/**
 * increase each property by a percentage
 * @param {number} perzent
 * @returns the mutated object by the specified percentage
 */
function raiseSalary(perzent) {
  for (let key in salaries) {
    salaries[key] = Math.floor((salaries[key] / 100) * perzent + salaries[key]);
  }
  return salaries;
}

console.log(raiseSalary(5));

let sumSalaries = 0;

for (let key in salaries) {
  sumSalaries += salaries[key];
}

console.log(sumSalaries);
