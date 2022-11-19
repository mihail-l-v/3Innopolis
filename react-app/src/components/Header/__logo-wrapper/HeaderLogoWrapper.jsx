import './HeaderLogoWrapper.scss';
import HeaderLogo from '../__logo/HeaderLogo';
import HeaderTitle from '../__title/HeaderTitle';

function HeaderLogoWrapper() {
  return (
    <div className="header__logo-wrapper">
      <HeaderLogo />
      <HeaderTitle />
    </div>
  );
}

export default HeaderLogoWrapper;
