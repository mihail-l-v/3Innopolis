import './_reviews.scss';
import Review from '../Review/Review';

const reviews = [
  {
    id: 0,
    nameAutor: 'Марк Г.',
    avatar: 'https://thispersondoesnotexist.com/image',
    reviewRating: './img/star-5.svg',
    experience: `менее месяца `,
    reviewAdvantag: `это мой первый айфон после после огромного количества телефонов на андроиде. всёплавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая,ширик тоже на высоте. `,
    reviewFlaw: `к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное `,
  },
  {
    id: 1,
    nameAutor: 'Валерий Коваленко',
    avatar: 'https://thispersondoesnotexist.com/image',
    reviewRating: './img/star-4.svg',
    experience: `менее месяца `,
    reviewAdvantag: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго `,
    reviewFlaw: `Плохая ремонтопригодность `,
  },
];

function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__header">
        <div className="reviews__wrapper">
          <h3 className="reviews__title">Отзывы</h3>
          <span className="reviews__amount">425</span>
        </div>
      </div>
      <div className="reviews__list">
        {reviews.map((review) => {
          return (
            <Review key={review.id} review={review} />
          );
        })}
      </div>
    </section>
  );
}

export default Reviews;
