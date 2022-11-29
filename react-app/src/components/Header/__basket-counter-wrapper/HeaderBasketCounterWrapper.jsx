import './HeaderBasketCounterWrapper.scss';
import HeaderBasketCounter from '../__basket-counter/HeaderBasketCounter';
import { useSelector } from 'react-redux';

function HeaderBasketCounterWrapper() {
  const count = useSelector((store) => store.cart.products.length);
  return (
    <div className={`header__basket-counter-wrapper ${count ? `` : `header__basket-counter-wrapper_hiden-js`}`}>
      <HeaderBasketCounter />
    </div>
  );
}

export default HeaderBasketCounterWrapper;
