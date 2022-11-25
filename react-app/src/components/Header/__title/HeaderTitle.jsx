import './HeaderTitle.scss';
import {Link} from 'react-router-dom';
import HeaderTitleDecoration from '../__title-decoration/HeaderTitleDecoration';

function HeaderTitle() {
  return (
    <Link to='/' className="header__title">
      <h1 className="header__title"> <HeaderTitleDecoration />Маркет</h1>
    </Link>
  );
}

export default HeaderTitle;
