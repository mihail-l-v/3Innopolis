import './ProductColorList.scss';
import img1 from './img/color-1.webp';
import img2 from './img/color-2.webp';
import img3 from './img/color-3.webp';
import img4 from './img/color-4.webp';
import img5 from './img/color-5.webp';
import img6 from './img/color-6.webp';

function ProductColorList() {
  return (
    <div className="product-color__list">
      <picture className="product-color__picture">
        <img className="product-color__item" src={img1} height="60" alt="Красный цвет" />
      </picture>
      <picture className="product-color__picture">
        <img className="product-color__item" src={img2} height="60" alt="Зеленый цвет" />
      </picture>
      <picture className="product-color__picture">
        <img className="product-color__item" src={img3} height="60" alt="Розовый цвет" />
      </picture>
      <picture className="product-color__picture product-color__picture_current">
        <img className="product-color__item" src={img4} height="60" alt="Синий цвет" />
      </picture>
      <picture className="product-color__picture">
        <img className="product-color__item" src={img5} height="60" alt="Белый цвет" />
      </picture>
      <picture className="product-color__picture">
        <img className="product-color__item" src={img6} height="60" alt="Черный цвет" />
      </picture>
    </div>
  );
}

export default ProductColorList;
