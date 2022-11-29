import './HeaderLogo.scss';
import {Link} from 'react-router-dom';
import HeaderLogoImg from '../__logo-img/HeaderLogoImg';

function HeaderLogo() {
  return (
    <Link to='/' className="header__logo">
      <HeaderLogoImg />
    </Link>
  );
}

export default HeaderLogo;
