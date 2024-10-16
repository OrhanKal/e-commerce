import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <div className="bg-blue-500 text-white text-center py-16 mb-8">
        <h1 className="text-4xl font-bold mb-4">Summer 2020 New Collection</h1>
        <p className="text-lg mb-4">We know how large objects will act, but things on a small scale.</p>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Shop Now</button>
      </div>

      {/* Ürün Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard title="Product 1" price="$29.99" image="https://via.placeholder.com/360x360" />
        <ProductCard title="Product 2" price="$39.99" image="https://via.placeholder.com/360x360" />
        <ProductCard title="Product 3" price="$19.99" image="https://via.placeholder.com/360x360" />
        <ProductCard title="Product 4" price="$49.99" image="https://via.placeholder.com/360x360" />
      </div>
    </div>
  );
};

export default HomePage;
