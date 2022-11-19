import Img4 from './img/star-4.svg';
import Img5 from './img/star-5.svg';
import './_reviews.scss';
import './_review.scss';

function Reviews() {
  return (
    <section class="reviews">
        <div class="reviews__header">
          <div class="reviews__wrapper">
            <h3 class="reviews__title">Отзывы</h3>
            <span class="reviews__amount">425</span>
          </div>
        </div>
        <div class="reviews__list">
          <div class="reviews__item review">
            <div class="review__avatar">
              <img class="review__avatar-img" src="https://thispersondoesnotexist.com/image" height="140" width="140" alt="Аватар автора комментария" />
            </div>
            <div class="review__wrapper">
              <p class="review__autor">Марк Г.</p>
              <div class="review__rating">
                <img class="review__rating-img" src={Img5} height="30" alt="Оценка товара" />
              </div>
              <div class="review__details">
                <p class="review__detail">
                  <span class="review__detail-title">Опыт использования:</span> менее месяца
                </p>
                <p class="review__detail">
                  <span class="review__detail-title">Достоинства:</span> <br />
                  это мой первый айфон после после огромного количества телефонов на андроиде. всёплавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая,ширик тоже на высоте.
                </p>
                <p class="review__detail">
                  <span class="review__detail-title">Недостатки:</span> <br />
                  к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное
                </p>
              </div>
            </div>
          </div>

          <div class="reviews__separator"></div>

          <div class="reviews__item review">
            <div class="review__avatar">
              <img class="review__avatar-img" src="https://thispersondoesnotexist.com/image" height="140" width="140" alt="Аватар автора комментария" />
            </div>
            <div class="review__wrapper">
              <p class="review__autor">Валерий Коваленко</p>
              <div class="review__rating">
                <img class="review__rating-img" src={Img4} height="30" alt="Оценка товара" />
              </div>
              <div class="review__details">
                <p class="review__detail">
                  <span class="review__detail-title">Опыт использования:</span> менее месяца
                </p>
                <p class="review__detail">
                  <span class="review__detail-title">Достоинства:</span> <br />
                  OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго
                </p>
                <p class="review__detail">
                  <span class="review__detail-title">Недостатки:</span> <br />
                  Плохая ремонтопригодность
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Reviews;
