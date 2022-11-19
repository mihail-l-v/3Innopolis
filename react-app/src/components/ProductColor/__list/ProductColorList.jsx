import './ProductColorList.scss';

const colors = [
  {
    image: './img/color-1.webp',
    alt: 'Красный цвет',
  },
  {
    image: './img/color-2.webp',
    alt: 'Зеленый цвет',
  },
  {
    image: './img/color-3.webp',
    alt: 'Розовый цвет',
  },
  {
    image: './img/color-4.webp',
    alt: 'Синий цвет',
  },
  {
    image: './img/color-5.webp',
    alt: 'Белый цвет',
  },
  {
    image: './img/color-6.webp',
    alt: 'Черный цвет',
  },
];

function ProductColorList() {
  let activedColor = 3;
  return (
    <div className="product-color__list">
      {colors.map((color, index) => {
        const actived = index === activedColor;
        const CurrentClassName = actived ? 'product-color__picture_current' : '';
        return (
          <picture className={`product-color__picture ${CurrentClassName}`}>
            <img className= 'product-color__item' src={color.image} height="60" alt={color.alt} key = {color.image} />
          </picture>
        );
      })}
    </div>
  );
}

export default ProductColorList;
