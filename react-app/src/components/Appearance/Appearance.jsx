import './Appearance.scss';

let images = [
  {
    url:  './img/image-1.webp',
    alt: 'Вид Apple iPhone 13 спереди и сзади',
  },
  {
    url:  './img/image-2.webp',
    alt: 'Фронтальный вид Apple iPhone 13',
  },
  {
    url:  './img/image-3.webp',
    alt: 'Вид сбоку Apple iPhone 13',
  },
  {
    url:  './img/image-4.webp',
    alt: 'Камера Apple iPhone 13',
  },
  {
    url:  './img/image-5.webp',
    alt: 'Вид Apple iPhone 13 сзади',
  },
];

function Appearance() {
  return (
    <section className="appearance">
      {images.map((image, index) => {
        return (
          <img class="appearance__item" src={image.url} height="387" alt={image.alt} key={index} />
        );
      })}
    </section>
  );
}

export default Appearance;
