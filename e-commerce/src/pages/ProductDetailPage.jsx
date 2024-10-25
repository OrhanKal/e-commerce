import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import ProductCarousel from '../components/ProductCarousel';
import ProductTabs from '../components/ProductTabs';
import ProductDetails from '../components/ProductDetails';
import BestsellerProducts from '../components/BestsellerProducts';
import LogoGrid from '../components/LogoGrid';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-[#FAFAFA] w-full py-8">
      {/* Breadcrumb */}
      <div className="container mx-auto mb-8 px-4">
        <Breadcrumb productTitle={product.title} />
      </div>

      {/* Ürün Detayları */}
      <div className="container mx-auto bg-white p-8 flex flex-col md:flex-row gap-8 shadow-md rounded-lg">
        <div className="flex-1">
          <ProductCarousel images={product.images} />
        </div>
        <div className="flex-1">
          <ProductDetails product={product} />
        </div>
      </div>

      {/* Ürün Bilgi Sekmeleri */}
      <ProductTabs product={product} />

      {/* Bestseller Products Bölümü */}
      <BestsellerProducts />

      {/* Logo Grid */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <LogoGrid />
      </div>
    </div>
  );
};

// Breadcrumb bileşeni
const Breadcrumb = ({ productTitle }) => (
  <div>
    <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
      Home
    </Link>
    <span className="mx-2 text-gray-400">/</span>
    <Link to="/shop" className="text-sm text-gray-500 hover:text-gray-700">
      Shop
    </Link>
    <span className="mx-2 text-gray-400">/</span>
    <span className="text-sm text-gray-400">{productTitle}</span>
  </div>
);

export default ProductDetailPage;
