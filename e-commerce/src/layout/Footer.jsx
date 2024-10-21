import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-12">
        {/* Logo ve Sosyal Medya */}
        <div className="flex flex-col md:items-start mb-8 md:flex-row md:justify-between">
          <h2 className="text-xl font-bold text-left mb-4 md:mb-0">Bandage</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="text-blue-600">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="text-blue-600">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
        </div>

        {/* Menü Kategorileri */}
        <div className="bg-white py-10 px-12 grid grid-cols-1 gap-8 md:grid-cols-5 text-sm">
          <div>
            <h4 className="font-bold text-lg mb-4">Company Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Business Marketing</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">User Analytic</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Live Chat</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Unlimited Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">iOS & Android</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Watch a Demo</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Customers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">API</a></li>
            </ul>
          </div>

          {/* Abonelik Bölümü */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <form className="flex items-center  mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 px-4 py-2 w-full rounded-l-lg"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm">Lore imp sum dolor Amit.</p>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className=" bg-gray-100 py-10 text-center text-gray-500 text-sm mt-8">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
