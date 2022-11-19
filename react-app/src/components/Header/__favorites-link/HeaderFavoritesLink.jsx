import './HeaderFavoritesLink.scss';
import HeaderFavoritesImg from '../__favorites-img/HeaderFavoritesImg';
import HeaderFavoritesCounterWrapper from '../__favorites-counter-wrapper/HeaderFavoritesCounterWrapper';

function HeaderFavoritesLink() {
  return (
    <a className="header__favorites-link" href="index.html">
      <HeaderFavoritesImg />
      <HeaderFavoritesCounterWrapper />
    </a>
  );
}

export default HeaderFavoritesLink;
