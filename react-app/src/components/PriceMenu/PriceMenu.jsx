import './_price-menu.scss';
import './_button.scss';
import FavoritesButton from '../FavoritesButton/FavoritesButton';
import FavoritesButtonAdd from '../FavoritesButtonAdd/FavoritesButtonAdd';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from './../../reducers/cart-reducer';
import { addFavorites, removeFavorites } from './../../reducers/favorites-reducer';

function PriceMenu() {
  const products = useSelector((store) => store.cart.products);
  const favoriteProducts = useSelector((store) => store.favorites.products);
  const dispatch = useDispatch();

  const iphone = {id: 4884, name: `Iphone 13`};

  const hasInCart = products.some((prevProduct) => {
    return prevProduct.id === iphone.id});
  const hasInFavorites = favoriteProducts.some((prevProduct) => {
    return prevProduct.id === iphone.id});

  function handleAddProduct(e, product) {
    const action = addProduct(product);
    dispatch(action);
  };

  function handleDelProduct(e, product) {
    const action = removeProduct(product);
    dispatch(action);
  };

  function handleAddFavorites(e, product) {
    const action = addFavorites(product);
    dispatch(action);
  }

  function handleDelFavorites(e, product) {
    const action = removeFavorites(product);
    dispatch(action);
  }

  return (
    <div className="price-menu">
      <div className="price-menu__wrapper">
        <div className="price-menu__discont-wrapper">
          <span className="price-menu__old-price">75 990₽</span>
          <span className="price-menu__discont">-8%</span>
        </div>
        {hasInFavorites ? (
          <button className="price-menu__favorites-button" onClick={(e) => handleDelFavorites(e, iphone)} type="button">
          <FavoritesButtonAdd />
        </button>
        ) : (
          <button className="price-menu__favorites-button" onClick={(e) => handleAddFavorites(e, iphone)} type="button">
          <FavoritesButton />
        </button>
        )}
      </div>
      <h3 className="price-menu__price">67 990₽</h3>
      <p className="price-menu__delivery">Самовывоз в четверг, 1 сентября — <span className="price-menu__delivery-bold">бесплатно</span></p>
      <p className="price-menu__delivery">Курьером в четверг, 1 сентября — <span className="price-menu__delivery-bold">бесплатно</span></p>
      <p className="price-menu__button-wrapper">
        {hasInCart ? (
          <button className="price-menu__button button-dark" onClick={(e) => handleDelProduct(e, iphone)} type="button">Товар уже в корзине</button>
        ) : (
          <button className="price-menu__button button button__color" onClick={(e) => handleAddProduct(e, iphone)} type="button">Добавить в корзину</button>
        )}
      </p>
    </div>
  );
}

export default PriceMenu;
