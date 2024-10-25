import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products'; // Ürün verilerini import ediyoruz

const BestsellerProducts = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      {/* Başlık */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
      </div>

      {/* Ürün Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 6).map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            discount={item.discount}
            image={item.images[0]} // Sadece ilk resmi kullanıyoruz
          />
        ))}
      </div>
    </div>
  );
};

export default BestsellerProducts;
