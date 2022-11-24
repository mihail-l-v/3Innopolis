import './_review.scss';


function Review(props) {
  let {review} = props;
  return (
    <>
      <div className="reviews__separator"></div>

      <div className="reviews__item review">
        <div className="review__avatar">
          <img className="review__avatar-img" src="https://thispersondoesnotexist.com/image" height="140" width="140" alt="Аватар автора" />
        </div>
        <div className="review__wrapper">
          <p className="review__autor">{review.nameAutor}</p>
          <div className="review__rating">
            <img className="review__rating-img" src={review.reviewRating} height="30" alt="Оценка товара" />
          </div>
          <div className="review__details">
            <p className="review__detail">
              <span className="review__detail-title">Опыт использования:</span> {review.experience}
            </p>
            <p className="review__detail">
              <span className="review__detail-title">Достоинства:</span> <br />
              {review.reviewAdvantag}
            </p>
            <p className="review__detail">
              <span className="review__detail-title">Недостатки:</span> <br />
              {review.reviewFlaw}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
