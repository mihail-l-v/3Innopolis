import './HeaderFavoritesCounter.scss';
import { useSelector } from 'react-redux';

function HeaderFavoritesCounter() {
  const count = useSelector((state) => state.favorites.products.length);
  return (
    <span className="header__favorites-counter">{count}</span>
  );
}

export default HeaderFavoritesCounter;
