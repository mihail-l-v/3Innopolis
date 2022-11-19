import './HeaderLogoImg.scss';
import logoImg from './img/main-logo.png';

function HeaderLogoImg() {
  return (
    <img className="header__logo-img" src={logoImg} alt="Логотип сайта"></img>
  );
}

export default HeaderLogoImg;
