'use strict';
window.addEventListener('DOMContentLoaded', init);

const form = document.querySelector('.review-form__form');

const inputName = form.querySelector('.review-form__name');
const errorNameElem = form.querySelector('.review-form__name-error');

const inputRating = form.querySelector('.review-form__rating');
const errorRatingElem = form.querySelector('.review-form__rating-error');

const inputReview = form.querySelector('.review-form__text-review');

function init() {
  console.log(`page downloaded`);
  inputName.value = localStorage.getItem('user-name');
  inputRating.value = localStorage.getItem('rating');
  inputReview.value = localStorage.getItem('text-review');
}

class AddReviewForm {
  handleSubmit(event) {
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

  handleInput(event) {
    let value = event.target.value;
    let name = event.target.getAttribute('name');
    console.log(name, value);
    localStorage.setItem(name, value);
    console.log(localStorage.getItem(name));
  }
}

let addFieldForm = new AddReviewForm();

form.addEventListener('submit', addFieldForm.handleSubmit);

inputName.addEventListener('input', addFieldForm.handleInput);
inputRating.addEventListener('input', addFieldForm.handleInput);
inputReview.addEventListener('input', addFieldForm.handleInput);
