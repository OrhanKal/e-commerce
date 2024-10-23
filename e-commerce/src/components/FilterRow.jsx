import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";

const FilterRow = ({ totalResults, onFilter, onViewChange, view }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
      <div className="text-gray-500">
        <p>Showing all {totalResults} results</p>
      </div>

      <div className="flex items-center">
        <div className="flex items-center gap-4">
          <span className="mr-2 text-sm font-bold text-gray-700">Views:</span>
          <button
            onClick={() => onViewChange("grid")}
            className={`p-2 border rounded size-12 ${view === "grid" ? "bg-gray-100" : "bg-white"} focus:outline-none`}
          >
            <FontAwesomeIcon icon={faTh} />
          </button>
          <button
            onClick={() => onViewChange("list")}
            className={`p-2 border rounded size-12 ${view === "list" ? "bg-gray-100" : "bg-white"} focus:outline-none`}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        </div>
        <div className="flex items-center gap-3.5">
        <select
          onChange={onFilter}
          className="p-2 border rounded-md h-12 focus:outline-none"
        >
          <option value="popularity">Popularity</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md h-12">
          Filter
        </button>
        </div>
    </div>
  );
};

export default FilterRow;
