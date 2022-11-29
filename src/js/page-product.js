'use strict';
window.addEventListener('DOMContentLoaded', init);

const form = document.querySelector('.review-form__form');

const inputName = form.querySelector('.review-form__name');
const errorNameElem = form.querySelector('.review-form__name-error');

const inputRating = form.querySelector('.review-form__rating');
const errorRatingElem = form.querySelector('.review-form__rating-error');

const inputReview = form.querySelector('.review-form__text-review');

let imgCart = document.querySelector('.header__basket-counter-wrapper');
let buttonCart = document.querySelector('.price-menu__button');
let counterCart = document.querySelector('.header__basket-counter');

let favoritesButton = document.querySelector('.price-menu__favorites-button');
let counterFavorites = document.querySelector('.header__favorites-counter');
let imgFavorites= document.querySelector('.header__favorites-counter-wrapper');
let imgFavoritesAdd = document.querySelector('.price-menu__favorites-img-svg');


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

  if (+localStorage.getItem('summCart') > 0) {
    imgCart.classList.remove('header__basket-counter-wrapper_hiden-js');
    buttonCart.style.backgroundColor = '#888888';
    buttonCart.innerText = `Товар уже в корзине`;
  }

  if (localStorage.getItem('summFavorites') == '1') {
    imgFavorites.classList.remove('header__favorites-counter-wrapper_hiden-js');
    counterFavorites.innerText = 1;
    imgFavoritesAdd.setAttribute('xlink:href', 'img/sprite.svg#favorites-img-add');
  }
}

function handleInput(event) {
  let value = event.target.value;
  let name = event.target.getAttribute('name');
  console.log(name, value);
  localStorage.setItem(name, value);
  console.log(`В локалСторадж - `, localStorage.getItem(name));
}

form.addEventListener('submit', handleSubmit);

inputName.addEventListener('input', handleInput);
inputRating.addEventListener('input', handleInput);
inputReview.addEventListener('input', handleInput);

let addToCartButton = document.querySelector('.button__addCart');

addToCartButton.addEventListener('click', handleCart);

//Вторая промежуточная аттастация ->

// возмем id товара из базы
const idProduct = 123;
//возмем данные покупателя из базы
localStorage.setItem('user', JSON.stringify({arrayCart: [], favorites: []}));

let objectUser = JSON.parse(localStorage.getItem('user'));
let arrayCart = objectUser.arrayCart;
let arrayFavorites = objectUser.favorites;

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

favoritesButton.addEventListener('click', handleFavorites);

function handleFavorites() {
  if (arrayFavorites.includes(idProduct)) {
    arrayFavorites = arrayFavorites.filter(item => item !== idProduct);
    let countFavorites = arrayFavorites.length;
    counterFavorites.innerText = countFavorites;
    localStorage.setItem('summFavorites', '0');
    imgFavorites.classList.add('header__favorites-counter-wrapper_hiden-js');
    imgFavoritesAdd.setAttribute('xlink:href', 'img/sprite.svg#favorites-img');
  } else {
    arrayFavorites.push(idProduct);
    let countFavorites = arrayFavorites.length;
    localStorage.setItem('summFavorites', '1');
    counterFavorites.innerText = countFavorites;
    imgFavorites.classList.remove('header__favorites-counter-wrapper_hiden-js');
    imgFavoritesAdd.setAttribute('xlink:href', 'img/sprite.svg#favorites-img-add');
  }
}
