'use strict';
window.addEventListener('DOMContentLoaded', init);

const form = document.querySelector('.review-form__form');

const inputName = form.querySelector('.review-form__name');
const errorNameElem = form.querySelector('.review-form__name-error');

const inputRating = form.querySelector('.review-form__rating');
const errorRatingElem = form.querySelector('.review-form__rating-error');

const inputReview = form.querySelector('.review-form__text-review');

let hidenCart = document.querySelector('.header__basket-counter-wrapper_hiden-js');
let imgCart = document.querySelector('.header__basket-counter-wrapper');


function handleSubmit(event) {
  event.preventDefault();

  //for name
  let errorName = '';

  let name = inputName.value;

  if (name.length < 3) {
    errorName = 'Имя не может быть короче 2-х символов';
  }

  if (name.length === 0) {
    errorName = 'Вы забыли указать имя и фамилию';
  }

  errorNameElem.innerText = errorName;
  errorNameElem.classList.toggle('review-form__name-error_visible', errorName);

  if (errorName) return;

  //for rating
  let errorRating = '';
  let rating = inputRating.value;

  if (rating < 1 || rating > 6 || (!Number(rating))) {
    errorRating = 'Оценка должна быть от 1 до 5';
  }

  errorRatingElem.innerText = errorRating;
  errorRatingElem.classList.toggle('review-form__rating-error_visible', errorRating);

  localStorage.removeItem('user-name');
  localStorage.removeItem('rating');
  localStorage.removeItem('text-review');
}

function init() {
  console.log(`page downloaded`);
  inputName.value = localStorage.getItem('user-name');
  inputRating.value = localStorage.getItem('rating');
  inputReview.value = localStorage.getItem('text-review');
  counterCart.innerText = localStorage.getItem('summCart');

  if (localStorage.getItem('summCart') !== '0') {
    imgCart.classList.remove('header__basket-counter-wrapper_hiden-js');
  }
}

function handleInput(event) {
  let value = event.target.value;
  let name = event.target.getAttribute('name');
  console.log(name, value);
  localStorage.setItem(name, value);
  console.log(localStorage.getItem(name));
}

form.addEventListener('submit', handleSubmit);

inputName.addEventListener('input', handleInput);
inputRating.addEventListener('input', handleInput);
inputReview.addEventListener('input', handleInput);

let addToCartButton = document.querySelector('.button__addCart');
let counterCart = document.querySelector('.header__basket-counter');

addToCartButton.addEventListener('click', handleCart);

//Вторая промежуточная аттастация ->

// возмем id товара из базы
const idProduct = 123;
//возмем данные покупателя из базы
localStorage.setItem('user', JSON.stringify({arrayCart: []}));

let buttonCart = document.querySelector('.price-menu__button');
let objectCart = JSON.parse(localStorage.getItem('user'));
let arrayCart = objectCart.arrayCart;

///

function handleCart() {
  if (arrayCart.includes(idProduct)) {
    arrayCart = arrayCart.filter(item => item !== idProduct);
    let countCart = arrayCart.length;
    localStorage.setItem('summCart', countCart);
    counterCart.innerText = localStorage.getItem('summCart');
    buttonCart.innerText = `Добавить в корзину`;
    buttonCart.style.backgroundColor = '';
    imgCart.classList.add('header__basket-counter-wrapper_hiden-js');
  } else {
    arrayCart.push(idProduct);
    let countCart = arrayCart.length;
    localStorage.setItem('summCart', countCart);
    counterCart.innerText = localStorage.getItem('summCart');
    buttonCart.innerText = `Товар уже в корзине`;
    buttonCart.style.backgroundColor = '#888888';
    imgCart.classList.remove('header__basket-counter-wrapper_hiden-js');
  }
}
