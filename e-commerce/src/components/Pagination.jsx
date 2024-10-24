import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="w-[313px] h-[74px] mx-auto flex items-center justify-between border border-gray-300 rounded-lg text-center">
      {/* First Button */}
      <div className="flex items-center h-full">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={`h-full w-[84px] ${
            currentPage === 1 ? "text-gray-400" : "text-blue-500 hover:bg-gray-100"
          }`}
        >
          First
        </button>

        {/* Çizgi - First Butonunun Sağında */}
        <div className="w-[1px] h-full bg-gray-300"></div>
      </div>

      {/* Page Numbers */}
      <div className="flex items-center h-full">
        {[...Array(totalPages)].map((_, index) => (
          <React.Fragment key={index + 1}>
            {index > 0 && (
              <div className="w-[1px] h-full bg-gray-300"></div> // Sayfa numaraları arasındaki çizgi
            )}
            <button
              onClick={() => onPageChange(index + 1)}
              className={`w-[46px] h-full flex items-center justify-center ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "text-blue-500 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* Çizgi - Next Butonunun Solunda */}
      <div className="flex items-center h-full">
        <div className="w-[1px] h-full bg-gray-300"></div>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`h-full w-[84px] ${
            currentPage === totalPages
              ? "text-gray-400"
              : "text-blue-500 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
