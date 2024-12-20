import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, subtitle, price, discount, image }) => {
  return (
    <Link to={`/product/${id}`} className="block bg-white rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300">
      {/* Ürün Resmi */}
      <div className="w-full h-80">
        <img
          src={image || "https://via.placeholder.com/360x360"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ürün Bilgileri */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-500">{subtitle}</p>

        {/* Fiyat Bilgileri */}
        <div className="flex justify-center items-center mt-2 space-x-2">
          <span className="text-gray-400 line-through">{price}</span>
          <span className="text-green-600 font-bold">{discount}</span>
        </div>

        {/* Renk Seçenekleri */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <span className="w-4 h-4 rounded-full bg-blue-500"></span>
          <span className="w-4 h-4 rounded-full bg-red-500"></span>
          <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
          <span className="w-4 h-4 rounded-full bg-black"></span>
        </div>
      </div>
      </Link>
  );
};

export default ProductCard;
