import CartItem from './components/CartItem';
import Product from './components/Product';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../store/slices/shoppingCartSlice';

const ShoppingCart = () => {
  const { products, cart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="mx-1">Shopping Cart</h2>

      <h3 className="mx-1">Products</h3>
      <article className="box grid-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </article>

      <h3 className="mx-1">Cart</h3>
      <div>
        <button
          type="button"
          onClick={() => dispatch(clearCart())}
          disabled={cart.length <= 0}
        >
          Clear cart
        </button>
      </div>
      <article className="box mx-1">
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}

        {cart.length <= 0 && <p>Cart empty</p>}
      </article>
    </div>
  );
};

export default ShoppingCart;
