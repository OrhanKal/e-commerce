import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold">My E-commerce</div>
      <nav className="flex space-x-4">
        <Link to="/" className="text-gray-700">Home</Link>
        <Link to="/products" className="text-gray-700">Products</Link>
        <Link to="/about" className="text-gray-700">About</Link>
        <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700" />
        <FontAwesomeIcon icon={faBars} className="text-gray-700 md:hidden" />
      </nav>
    </header>
  );
};

export default Header;