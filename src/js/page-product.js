'use strict';
const form = document.querySelector('.review-form__form');

const inputName = form.querySelector('.review-form__name');
const errorNameElem = form.querySelector('.review-form__name-error');

const inputRating = form.querySelector('.review-form__rating');
const errorRatingElem = form.querySelector('.review-form__rating-error');


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
}

form.addEventListener('submit', handleSubmit);
