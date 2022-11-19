import './HeaderBasketLink.scss';
import HeaderBasketImg from '../__basket-img/HeaderBasketImg';
import HeaderBasketCounterWrapper from '../__basket-counter-wrapper/HeaderBasketCounterWrapper';

function HeaderBasketLink() {
  return (
    <a className="header__basket-link" href="index.html">
      <HeaderBasketImg />
      <HeaderBasketCounterWrapper />
    </a>
  );
}

export default HeaderBasketLink;
