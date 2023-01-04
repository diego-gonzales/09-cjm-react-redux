import { useDispatch } from 'react-redux';
import {
  removeAllFromCart,
  removeOneFromCart,
  addToCart,
} from '../../../store/slices/shoppingCartSlice';

const CartItem = ({ item }) => {
  const { id, name, price, quantity } = item;
  const dispatch = useDispatch();

  const removeFromCart = (item, all = false) => {
    if (all) {
      dispatch(removeAllFromCart(item));
    } else {
      dispatch(removeOneFromCart(item));
    }
  };

  return (
    <div className="item-container">
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <p>Quantity: {quantity}</p>
      <p>Total: ${price * quantity}.00</p>
      <div>
        <button
          type="button"
          onClick={() => removeFromCart(item, false)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <button type="button" onClick={() => dispatch(addToCart(item))}>
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => removeFromCart(item, true)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
