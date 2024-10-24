import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product, index) => (
        <ProductCard
        key={product.id}
        id={product.id} // Burada id prop'unu gönderiyoruz
        title={product.title}
        subtitle={product.subtitle}
        price={product.price}
        discount={product.discount}
        image={product.image}
      />
      ))}
    </div>
  );
};

export default ProductGrid;