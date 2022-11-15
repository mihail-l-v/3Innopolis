import './NavigationItem.scss';

function NavigationItem(props) {
  return (
  <a className="navigation__item" href="index.html">{props.page}</a>
  );
}

export default NavigationItem;
