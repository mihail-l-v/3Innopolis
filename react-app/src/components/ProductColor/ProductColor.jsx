import './ProductColor.scss';
import ProductColorTitle from './__title/ProductColorTitle';
import ProductColorList from './__list/ProductColorList';

function ProductColor() {
  return (
    <section className="product-color">
      <ProductColorTitle />
      <ProductColorList />
    </section>
  );
}

export default ProductColor;
