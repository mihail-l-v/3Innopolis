import './HeaderBasketCounterWrapper.scss';
import HeaderBasketCounter from '../__basket-counter/HeaderBasketCounter';

function HeaderBasketCounterWrapper() {
  return (
    <div className="header__basket-counter-wrapper header__basket-counter-wrapper_hiden-js">
      <HeaderBasketCounter />
    </div>
  );
}

export default HeaderBasketCounterWrapper;
