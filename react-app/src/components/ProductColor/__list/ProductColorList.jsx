import React, {useState} from 'react';
import './ProductColorList.scss';

const colors = [
  {
    id: 0,
    image: './img/color-1.webp',
    alt: 'Красный цвет',
  },
  {
    id: 1,
    image: './img/color-2.webp',
    alt: 'Зеленый цвет',
  },
  {
    id: 2,
    image: './img/color-3.webp',
    alt: 'Розовый цвет',
  },
  {
    id: 3,
    image: './img/color-4.webp',
    alt: 'Синий цвет',
  },
  {
    id: 4,
    image: './img/color-5.webp',
    alt: 'Белый цвет',
  },
  {
    id: 5,
    image: './img/color-6.webp',
    alt: 'Черный цвет',
  },
];

function ProductColorList() {
  const [count, setCount] = useState(3);
  let activedColor = count;

  const handleColor = (e, id) => {setCount(id);}

  return (
    <div className="product-color__list">
      {colors.map((color, index, ...restProps) => {
        const actived = index === activedColor;
        const CurrentClassName = actived ? 'product-color__picture_current' : '';
        return (
          <picture {...restProps} className={`product-color__picture ${CurrentClassName}`} key = {color.id} onClick={(e) => {handleColor(e, color.id)}}>
            <img className= 'product-color__item' src={color.image} height="60" alt={color.alt} />
          </picture>
        );
      })}
    </div>
  );
}

export default ProductColorList;
