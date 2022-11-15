import './HeaderFavoritesCounterWrapper.scss';
import HeaderFavoritesCounter from '../__favorites-counter/HeaderFavoritesCounter';

function HeaderFavoritesCounterWrapper() {
  return (
    <div className="header__favorites-counter-wrapper header__favorites-counter-wrapper_hiden-js">
      <HeaderFavoritesCounter />
    </div>
  );
}

export default HeaderFavoritesCounterWrapper;
