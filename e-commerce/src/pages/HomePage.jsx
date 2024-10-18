import React from "react";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import EditorsPick from "../layout/EditorsPick";

const HomePage = () => {
  return (
    <div className="w-full px-0 pb-8">
      {/* Slider */}
      <Slider />

      {/* Editor's Pick Bölümü */}
      <EditorsPick />

      {/* Ürün Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <ProductCard title="Product 1" price="$29.99" image="https://via.placeholder.com/360x360" />
        <ProductCard title="Product 2" price="$39.99" image="https://via.placeholder.com/360x360" />
        <ProductCard title="Product 3" price="$19.99" image="https://via.placeholder.com/360x360" />
        <ProductCard title="Product 4" price="$49.99" image="https://via.placeholder.com/360x360" />
      </div>
    </div>
  );
};

export default HomePage;
