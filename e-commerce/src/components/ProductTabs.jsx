import React, { useState } from 'react';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="container mx-auto mt-12 bg-white p-8 shadow-md rounded-lg">
      {/* Sekme Başlıkları */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 ${activeTab === 'description' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 mx-2 ${activeTab === 'additional' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('additional')}
        >
          Additional Information
        </button>
        <button
          className={`px-4 py-2 mx-2 ${activeTab === 'reviews' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({product.reviews})
        </button>
      </div>

      {/* Sekme İçeriği */}
      <div>
        {activeTab === 'description' && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Description Placeholder"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex-1">
              {/* Açıklama Paragrafları */}
              <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
          </div>
        )}
        {activeTab === 'additional' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Additional Information</h3>
            <p className="text-gray-600">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent...</p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
            <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
