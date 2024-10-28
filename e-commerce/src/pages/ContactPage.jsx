import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {/* Başlık ve Açıklama Metni */}
      <h1 className="text-3xl font-bold mb-4">Get answers to all your questions.</h1>
      <p className="text-gray-600 mb-6">
        Problems trying to resolve the conflict between the two major realms of Classical physics:
      </p>
      
      {/* İletişim Butonu */}
      <button className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition mb-8">
        CONTACT OUR COMPANY
      </button>
      
      {/* Sosyal Medya İkonları */}
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-800 transition">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 transition">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 transition">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 transition">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
