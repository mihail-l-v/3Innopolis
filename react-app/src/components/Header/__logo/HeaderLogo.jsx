import './HeaderLogo.scss';
import HeaderLogoImg from '../__logo-img/HeaderLogoImg';

function HeaderLogo() {
  return (
    <a className="header__logo" href="index.html">
      <HeaderLogoImg />
    </a>
  );
}

export default HeaderLogo;
