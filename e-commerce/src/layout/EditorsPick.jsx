import React from 'react';

const EditorsPick = () => {
  return (
    <div className="container mx-auto my-8 px-12">
      {/* Başlıklar */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">EDITOR'S PICK</h2>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
      </div>

      {/* Grid Düzeni */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
        {/* 1. Büyük Görsel (Men) */}
        <div className="lg:col-span-2 lg:row-span-2 relative bg-gray-200">
          <img src={`https://via.assets.so/game.png?id=${Math.floor(Math.random() * 10)}&q=95&w=1920&h=1080&fit=fill`}  alt="Men" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 font-bold">
            MEN
          </div>
        </div>

        {/* 2. Uzun Görsel (Women) */}
        <div className="lg:row-span-2 lg:col-start-3 relative bg-gray-200">
          <img src={`https://via.assets.so/game.png?id=${Math.floor(Math.random() * 10)}&q=95&w=1920&h=1080&fit=fill`}  alt="Women" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 font-bold">
            WOMEN
          </div>
        </div>

        {/* 3. Küçük Görsel (Accessories) */}
        <div className="lg:col-start-4 relative bg-gray-200">
          <img src={`https://via.assets.so/game.png?id=${Math.floor(Math.random() * 10)}&q=95&w=1920&h=1080&fit=fill`}  alt="Accessories" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 font-bold">
            ACCESSORIES
          </div>
        </div>

        {/* 4. Küçük Görsel (Kids) */}
        <div className="lg:col-start-4 lg:row-start-2 relative bg-gray-200">
          <img src={`https://via.assets.so/game.png?id=${Math.floor(Math.random() * 10)}&q=95&w=1920&h=1080&fit=fill`}  alt="Kids" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 font-bold">
            KIDS
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
