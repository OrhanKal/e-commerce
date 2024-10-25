import React from 'react';

const ProductDetails = ({ product }) => (
  <div>
    <h2 className="text-2xl font-bold">{product.title}</h2>
    <p className="text-yellow-500 my-4">⭐ {product.reviews} Reviews</p>
    <p className="text-3xl font-bold">{product.price}</p>
    <p className="my-4">
      Availability: <span className="text-green-500">In Stock</span>
    </p>
    <p className="text-gray-600 mb-4">{product.description}</p>

    {/* Renk Seçenekleri */}
    <ColorOptions colors={product.colors} />

    {/* Düğmeler */}
    <div className="mt-6 flex space-x-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Select Options
      </button>
      <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded hover:bg-gray-100 transition">
        <i className="fas fa-heart"></i>
      </button>
      <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded hover:bg-gray-100 transition">
        <i className="fas fa-shopping-cart"></i>
      </button>
      <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded hover:bg-gray-100 transition">
        <i className="fas fa-eye"></i>
      </button>
    </div>
  </div>
);

// Renk Seçenekleri bileşeni
const ColorOptions = ({ colors }) => (
  <div className="flex space-x-4 mb-6">
    {colors.map((color, index) => (
      <span
        key={index}
        style={{ backgroundColor: color }}
        className="w-8 h-8 rounded-full border border-gray-300"
      />
    ))}
  </div>
);

export default ProductDetails;
