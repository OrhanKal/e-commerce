import React from "react";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import EditorsPick from "../layout/EditorsPick";
import products from "../data/products";  // Ürün verilerini import ediyoruz

const HomePage = () => {
  return (
    <div className="w-full px-0 pb-8">
      {/* Slider */}
      <Slider />

      {/* Editor's Pick Bölümü */}
      <EditorsPick />

      {/* Ürün Kartları */}
      {/* Başlık */}
      <div className="text-center my-8">
        <p className="text-gray-500 text-xl">Featured Products</p>
        <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
        <p className="text-gray-500">Explore our exclusive collection</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            discount={product.discount}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
