import './_footer.scss';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__copyright">
          <p class="footer__title">
            © ООО «<span class="footer__title-decoration">Мой</span>Маркет», 2018-2022.
          </p>
          <p>
            Для уточненияинформации звоните по номеру <a class="footer__copyright-link footer__copyright-link_hover" href="tel:79000000000">+7 900 000 0000</a>,
          </p>
          <p>
            предложения по сотрудничеству отправляйте на почту <a class="footer__copyright-link footer__copyright-link_hover" href="mailto:partner@mymarket.com">partner@mymarket.com</a>
          </p>
        </div>
        <div class="footer__top-page">
          <a class="footer__top-link footer__top-link_hover" href="#top">Наверх</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
