import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import products from '../data/products';

const ProductDetailPage = () => {
  const { productId } = useParams(); // URL'den productId'yi alıyoruz
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
    {/* Carousel */}
    {product.images && product.images.length > 0 ? (
      <>
        <Swiper
          navigation
          modules={[Navigation]}
          className="mySwiper"
          style={{ width: '506px', height: '450px' }}
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Product ${index + 1}`} className="w-full h-auto object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Küçük Resimler */}
        <div className="flex mt-4 space-x-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover cursor-pointer border border-gray-300"
              onClick={() => {
                document.querySelectorAll('.swiper-slide')[index].scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            />
          ))}
        </div>
      </>
    ) : (
      <p>There are no images available for this product.</p>
    )}
  </div>
  <div className="flex-1">
    <ProductDetails product={product} />
  </div>
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

// Ürün Detayları bileşeni
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

export default ProductDetailPage;
