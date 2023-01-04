import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/counter"
          >
            Counter
          </Link>
        </li>
        <li>
          <Link
            to="/shopping-cart"
          >
            Shopping cart
          </Link>
        </li>
        <li>
          <Link
            to="/crud-api"
          >
            Crud API
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
