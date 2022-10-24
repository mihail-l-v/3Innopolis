'use strict';

// Задание №1
// Напишите функцию getSumm(arr), которая принимает любоймассив и возвращает сумму чисел в этом массиве.
//Обратитевнимание, что в качестве элементов массива могут приходитьне только числа и такие элементы необходимо пропускать.

let arr1 = [1, 2, 10, 5,];
let arr2 = ['a', {}, 3, 3, -2];

/**
 * Summ of numbers at array
 * @param {array} array
 * @returns summ of number at array
 */
function getSumm(array) {
  let summ = 0;
  for (let i = 0; i < array.length; i++) {
    if (!Number(array[i])){
      continue;
    }
    summ += array[i];
  }
  return summ;
}

console.log(getSumm(arr1));


//Задание №3
//Реализуйте упрощенную корзину в интернет-магазине.
//Представим, что мы храним в корзине идентификаторытоваров, которые пользователь добавил в корзину и нам нужнореализовать две функции:
//добавить в корзину и удалить изкорзины. Причём в корзину нельзя добавить два одинаковыхтовара

let cart = [4884, 555, 77];

/**
 *add to cart id product
 * @param {number} addId
 * @returns
 */
function addToCart(addId){
  if (!Number(addId)){
    return;
  }
  if (cart.includes(addId)){
    return
  } else {
    cart.push(addId);
  }
}

/**
 * delite from cart id product
 * @param {number} removeId
 */
function removeFromCart(removeId) {
  if (!Number(removeId)){
    return;
  }
  cart = cart.filter(item => item !== removeId);
}


addToCart (488);
removeFromCart(77);

console.log(cart);
