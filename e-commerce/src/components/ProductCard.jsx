import React from 'react';

const ProductCard = ({ title, subtitle, price, discount, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
      {/* Ürün Resmi */}
      <div className="w-full h-80">
        <img src={image} alt={title} className="w-full h-full object-cover" />
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
    </div>
  );
};

export default ProductCard;
