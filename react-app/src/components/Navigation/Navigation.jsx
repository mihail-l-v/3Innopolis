import './Navigation.scss';
import NavigationItem from './__item/NavigationItem';

function Navigation() {
  return (
    <nav className="navigation">
      <NavigationItem page="Электроника" /> {'> '}
      <NavigationItem page="Смартфоны и гаджеты" /> {'> '}
      <NavigationItem page="Мобильные телефоны" /> {'> '}
      <NavigationItem page="Apple" />
    </nav>
  );
}

export default Navigation;
