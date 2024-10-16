const ProductCard = ({ title, price, image }) => {
    return (
      <div className="border p-4 rounded-lg text-center">
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-lg font-bold mb-4">{price}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;