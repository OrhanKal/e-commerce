import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart, faBars, faPhone, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => {
      console.log('Dropdown durumu:', !prev);
      return !prev;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-button') && !event.target.closest('.dropdown-menu')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="relative w-full">
      {/* Üst Bar (Sadece Desktop için) */}
      <div className="hidden md:block bg-blue-700 text-white p-5">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>e-commerce.site@company.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us</span>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>

      {/* Ana Navigasyon */}
      <div className="bg-white shadow-md w-full">
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
                  className="dropdown-button text-sm font-bold text-gray-700 hover:text-gray-900"
                >
                  Shop
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu absolute left-0 mt-2 w-48 bg-white shadow-lg p-4 z-[100]">
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
              <Link to="/team" className="text-sm font-bold text-gray-700 hover:text-gray-900">Team</Link>
              <Link to="/pages" className="text-sm font-bold text-gray-700 hover:text-gray-900">Pages</Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <FontAwesomeIcon icon={faUser} className="text-blue-500" />
              <Link to="/login" className="text-sm font-bold text-blue-500 hover:text-blue-800">Login</Link>
              <span className="text-sm font-bold text-blue-500">/</span>
              <Link to="/signup" className="text-sm font-bold text-blue-500 hover:text-blue-800">Register</Link>
              <FontAwesomeIcon icon={faSearch} className="text-blue-500 ml-4" />
              <FontAwesomeIcon icon={faShoppingCart} className="text-blue-500" />
              <FontAwesomeIcon icon={faHeart} className="text-blue-500" />
            </div>
            <button onClick={toggleMenu} className="md:hidden">
              <FontAwesomeIcon icon={faBars} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
<div className={`overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'}`}>
  <nav className="flex flex-col items-center space-y-4 bg-white py-4">
    <Link to="/" className="text-lg text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Home</Link>
    <Link to="/product" className="text-lg text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Product</Link>
    <Link to="/pricing" className="text-lg text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Pricing</Link>
    <Link to="/contact" className="text-lg text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Contact</Link>
    <Link to="/team" className="text-lg text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Team</Link>
    {/* Login ve Register Linkleri Mobil Menüde */}
    <div className="flex items-center space-x-2 mt-4">
      <FontAwesomeIcon icon={faUser} className="text-blue-600" />
      <Link to="/login" className="text-lg text-blue-600 hover:text-blue-800" onClick={toggleMenu}>Login</Link>
      <span className="text-lg text-blue-600">/</span>
      <Link to="/signup" className="text-lg text-blue-600 hover:text-blue-800" onClick={toggleMenu}>Register</Link>
    </div>
    {/* Alt Menü İkonları */}
    <div className="flex flex-col items-center space-y-4 mt-8">
      <FontAwesomeIcon icon={faSearch} className="text-blue-500" />
      <FontAwesomeIcon icon={faShoppingCart} className="text-blue-500" />
      <FontAwesomeIcon icon={faHeart} className="text-blue-500" />
    </div>
  </nav>
</div>
    </header>
  );
};

export default Header;
