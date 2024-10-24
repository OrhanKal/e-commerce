import React, { useState } from "react";
import ProductGrid from "../layout/ProductGrid";
import FilterRow from "../components/FilterRow";
import products from "../data/products";
import { Link } from 'react-router-dom';
import Pagination from "../components/Pagination";
import LogoGrid from "../components/LogoGrid"; // Yeni eklenen LogoGrid bileşeni

const ShopPage = () => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const categories = [
    {
      name: "Cloths",
      image: "https://via.placeholder.com/360x360",
      items: 5,
      link: "/shop/category/cloths",
    },
    {
      name: "Accessories",
      image: "https://via.placeholder.com/360x360",
      items: 3,
      link: "/shop/category/accessories",
    },
    {
      name: "Shoes",
      image: "https://via.placeholder.com/360x360",
      items: 4,
      link: "/shop/category/shoes",
    },
    {
      name: "Bags",
      image: "https://via.placeholder.com/360x360",
      items: 2,
      link: "/shop/category/bags",
    },
  ];

  const handleFilterChange = (e) => {
    console.log("Selected filter:", e.target.value);
    // Filtreleme işlemlerini buradan başlatabilirsin
  };

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="container mx-auto w-full px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex flex-col items-center justify-center text-center px-4 mb-8 md:flex-row md:justify-between">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Shop</h2>
          <div className="text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Shop</span>
          </div>
        </div>

        {/* Kategori Grid Bölümü */}
        <div className="flex flex-wrap justify-between gap-6 mb-8">
          {categories.map((category, index) => (
            <Link
              to={category.link}
              key={index}
              className="relative w-full md:w-1/5 lg:w-1/5 group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-xl font-bold">{category.name.toUpperCase()}</h3>
                <p>{category.items} Items</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Filter Row */}
        <FilterRow
          totalResults={products.length}
          onFilter={handleFilterChange}
          onViewChange={handleViewChange}
          view={view}
        />

        {/* Ürün Listesi */}
        <div
          className={`flex flex-wrap justify-center gap-6 mt-8 ${
            view === "list" ? "flex-col" : ""
          }`}
        >
          <ProductGrid products={products} />
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {/* Logo Grid */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <LogoGrid />
      </div>
    </>
  );
};

export default ShopPage;
