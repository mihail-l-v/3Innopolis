import './_review-form.scss';
import './_button.scss';

function ReviewForm() {
  return (
    <section class="review-form">
      <div class="review-form__wrapper">
        <h3 class="review-form__title">Добавить свой отзыв</h3>
        <form class="review-form__form" action="#">
          <div class="review-form__form-wrapper">
            <div class="review-form__form-wrapper-input">
              <input class="review-form__name review-form__name_hover" type="text" name="user-name" placeholder="Имя и фамилия" />
              <div class="review-form__name-error"></div>
            </div>
            <div class="review-form__form-wrapper-input">
              <input class="review-form__rating review-form__rating_hover" type="number" name="rating" min="1" max="5" step="1" placeholder="Оценка" />
              <div class="review-form__rating-error"></div>
            </div>
            <textarea class="review-form__text-review review-form__text-review_hover" name="text-review" placeholder="Текст отзыва"></textarea>
          </div>
          <button class="review-form__button button button_size_small" type="submit">Отправить отзыв</button>
        </form>
      </div>
    </section>
  );
}

export default ReviewForm;
