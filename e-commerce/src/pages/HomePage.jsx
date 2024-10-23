import React from "react";
import Slider from "../components/Slider";
import ProductGrid from "../layout/ProductGrid";
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
      <ProductGrid products={products} />
    </div>
  );
};

export default HomePage;
