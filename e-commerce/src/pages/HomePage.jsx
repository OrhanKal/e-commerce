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
        <ProductCard 
          title="Graphic Design" 
          subtitle="English Department" 
          price="$16.48" 
          discount="$6.48" 
          image="https://via.placeholder.com/360x360" 
        />
        <ProductCard 
          title="Graphic Design" 
          subtitle="English Department" 
          price="$16.48" 
          discount="$6.48" 
          image="https://via.placeholder.com/360x360" 
        />
        <ProductCard 
          title="Graphic Design" 
          subtitle="English Department" 
          price="$16.48" 
          discount="$6.48" 
          image="https://via.placeholder.com/360x360" 
        />
        <ProductCard 
          title="Graphic Design" 
          subtitle="English Department" 
          price="$16.48" 
          discount="$6.48" 
          image="https://via.placeholder.com/360x360" 
        />
      </div>
    </div>
  );
};

export default HomePage;
