import './_footer.scss';
import {useCurrentDate } from '@kundinos/react-hooks';

function Footer() {
  const currentDate = useCurrentDate();
  const fullYear = currentDate.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <p className="footer__title">
            © ООО «<span className="footer__title-decoration">Мой</span>Маркет», 2018-{fullYear}
          </p>
          <p>
            Для уточненияинформации звоните по номеру <a className="footer__copyright-link footer__copyright-link_hover" href="tel:79000000000">+7 900 000 0000</a>,
          </p>
          <p>
            предложения по сотрудничеству отправляйте на почту <a className="footer__copyright-link footer__copyright-link_hover" href="mailto:partner@mymarket.com">partner@mymarket.com</a>
          </p>
        </div>
        <div className="footer__top-page">
          <a className="footer__top-link footer__top-link_hover" href="#top">Наверх</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
