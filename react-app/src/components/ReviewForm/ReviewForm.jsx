import React, {useState} from 'react';
import './_review-form.scss';
import './_button.scss';

function ReviewForm() {
  const [formName, setFormName] = useState(localStorage.getItem('user-name'));
  const [formRating, setFormRating] = useState(localStorage.getItem('rating'));
  const [formReview, setFormReview] = useState(localStorage.getItem('text-review'));
  const [errorName, setErrorName] = useState();
  const [errorRating, setErrorRating] = useState();

  function handleChangleName(e) {
    let value = e.target.value;
    setFormName(value);
    let name = e.target.getAttribute('name');
    localStorage.setItem(name, value);

  }

  function handleChangleRating(e) {
    let value = e.target.value;
    setFormRating(value);
    let name = e.target.getAttribute('name');
    localStorage.setItem(name, value);
  }

  function handleChangleReview(e) {
    let value = e.target.value;
    setFormReview(value);
    let name = e.target.getAttribute('name');
    localStorage.setItem(name, value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //for name
    if (formName === '' || formName === null || formName === undefined) {
      setErrorName('Вы забыли указать имя и фамилию');
      setErrorRating(null);
      return;
    }

    if (formName.length < 3 && formName.length > 0) {
      setErrorName('Имя не может быть короче 2-х символов');
      setErrorRating(null);
      return;
    }

    //for rating
    if (formRating < 1 || formRating > 6) {
      setErrorRating('Оценка должна быть от 1 до 5');
      setErrorName(null);
      return;
    }

    setFormName('');
    setFormRating('');
    setFormReview('');
    setErrorName('');
    setErrorRating('');
    localStorage.removeItem('user-name');
    localStorage.removeItem('rating');
    localStorage.removeItem('text-review');
  }

  return (
    <section className="review-form">
      <div className="review-form__wrapper">
        <h3 className="review-form__title">Добавить свой отзыв</h3>
        <form className="review-form__form" action="#" onSubmit={handleSubmit}>
          <div className="review-form__form-wrapper">
            <div className="review-form__form-wrapper-input">
              <input className="review-form__name review-form__name_hover" onChange={handleChangleName} type="text" name="user-name" placeholder="Имя и фамилия" value={formName} />
              <div className={`review-form__name-error ${errorName ? 'review-form__name-error_visible' : ''}`}>{errorName}</div>
            </div>
            <div className="review-form__form-wrapper-input">
              <input className="review-form__rating review-form__rating_hover" onChange={handleChangleRating} type="number" name="rating" min="1" max="5" step="1" placeholder="Оценка" value={formRating} />
              <div className={`review-form__rating-error ${errorRating ? 'review-form__rating-error_visible' : ''}`}>{errorRating}</div>
            </div>
            <textarea className="review-form__text-review review-form__text-review_hover" onChange={handleChangleReview} name="text-review" placeholder="Текст отзыва" value={formReview}></textarea>
          </div>
          <button className="review-form__button button button_size_small button__color" type="submit">Отправить отзыв</button>
        </form>
      </div>
    </section>
  );
}

export default ReviewForm;
