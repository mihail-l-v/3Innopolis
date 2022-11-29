import './HeaderBasketCounter.scss';
import { useSelector } from 'react-redux';

function HeaderBasketCounter() {
  const count = useSelector((state) => state.cart.products.length);
  return (
    <span className="header__basket-counter">{count}</span>
  );
}

export default HeaderBasketCounter;
