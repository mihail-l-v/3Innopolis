import './IndexMain.scss';
import {Link} from 'react-router-dom'

function IndexMain() {
  return (
    <>
    <div className='main'>
      <p className='main__text'>
        Здесь должно быть содержимое главной страницы. Но в рамках курса главная страница  используется лишь в демонстрационных целях
      </p>
      <p className='main__link-container'>
        <Link className='main__link' to='/product'>Перейти на страницу товара</Link>
      </p>
    </div>
    </>
  );
}

export default IndexMain;
