import './HeaderMenuWrapper.scss';
import HeaderFavorites from '../__favorites/HeaderFavorites';
import HeaderBasket from '../__basket/HeaderBasket';

function HeaderMenuWrapper() {
  return (
    <div className="header__menu-wrapper">
      <HeaderFavorites />
      <HeaderBasket />
    </div>
  );
}

export default HeaderMenuWrapper;
