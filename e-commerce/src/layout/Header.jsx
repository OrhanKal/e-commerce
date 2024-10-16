import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="relative bg-white shadow-md w-full overflow-hidden">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <Link to="/">Bandage</Link>
        </div>
        <div className="flex items-center space-x-6 w-4/5 justify-end md:justify-between">
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-sm font-bold text-gray-700 hover:text-gray-900">Home</Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-sm font-bold text-gray-700 hover:text-gray-900"
              >
                Shop
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg p-4">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold mb-2">Kadın</h4>
                      <ul className="space-y-1">
                        <li><Link to="/shop/bags" className="text-gray-700 hover:text-gray-900">Bags</Link></li>
                        <li><Link to="/shop/belts" className="text-gray-700 hover:text-gray-900">Belts</Link></li>
                        <li><Link to="/shop/cosmetics" className="text-gray-700 hover:text-gray-900">Cosmetics</Link></li>
                        <li><Link to="/shop/hats" className="text-gray-700 hover:text-gray-900">Hats</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Erkek</h4>
                      <ul className="space-y-1">
                        <li><Link to="/shop/bags" className="text-gray-700 hover:text-gray-900">Bags</Link></li>
                        <li><Link to="/shop/belts" className="text-gray-700 hover:text-gray-900">Belts</Link></li>
                        <li><Link to="/shop/cosmetics" className="text-gray-700 hover:text-gray-900">Cosmetics</Link></li>
                        <li><Link to="/shop/hats" className="text-gray-700 hover:text-gray-900">Hats</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className="text-sm font-bold text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/blog" className="text-sm font-bold text-gray-700 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="text-sm font-bold text-gray-700 hover:text-gray-900">Contact</Link>
            <Link to="/pages" className="text-sm font-bold text-gray-700 hover:text-gray-900">Pages</Link>
          </nav>
          <div className="flex items-center space-x-6">
            <FontAwesomeIcon icon={faUser} className="text-gray-700" />
            <FontAwesomeIcon icon={faSearch} className="text-gray-700" />
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700" />
            <button onClick={toggleMenu} className="md:hidden">
              <FontAwesomeIcon icon={faBars} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center space-y-4 bg-white py-4">
          <Link to="/" className="text-lg text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Home</Link>
          <Link to="/product" className="text-lg text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Product</Link>
          <Link to="/pricing" className="text-lg text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Pricing</Link>
          <Link to="/contact" className="text-lg text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
