import "./Header.scss";
import HeaderLogoWrapper from "./__logo-wrapper/HeaderLogoWrapper";
import HeaderMenuWrapper from "./__menu-wrapper/HeaderMenuWrapper";

function Header() {
  return (
    <div className="header">
      <HeaderLogoWrapper />
      <HeaderMenuWrapper />
    </div>
  );
}

export default Header;
