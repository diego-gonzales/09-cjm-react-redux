import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/slices/shoppingCartSlice';

const Product = ({ product }) => {
  const { id, name, price } = product;
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button type="button" onClick={() => dispatch(addToCart(product))}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
