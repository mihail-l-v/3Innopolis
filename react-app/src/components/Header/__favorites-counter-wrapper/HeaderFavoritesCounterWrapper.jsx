import './HeaderFavoritesCounterWrapper.scss';
import HeaderFavoritesCounter from '../__favorites-counter/HeaderFavoritesCounter';
import { useSelector } from 'react-redux';

function HeaderFavoritesCounterWrapper() {
  const count = useSelector((store) => store.favorites.products.length);
  return (
    <div className={`header__favorites-counter-wrapper ${count ? '' : `header__favorites-counter-wrapper_hiden-js`}`}>
      <HeaderFavoritesCounter />
    </div>
  );
}

export default HeaderFavoritesCounterWrapper;


