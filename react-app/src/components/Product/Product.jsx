import './Product.scss';
import ProductColor from '../ProductColor/ProductColor';
import InnerMemory from '../InnerMemory/InnerMemory';
import Characteristics from '../Characteristics/Characteristics';
import Description from '../Description/Description';
import Comparison from '../Comparison/Comparison';

function Product() {
  return (
    <div className="product">
      <ProductColor />
      <InnerMemory />
      <Characteristics />
      <Description />
      <Comparison />
    </div>
  );
}

export default Product;
