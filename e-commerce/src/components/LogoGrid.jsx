import React from 'react';

const logos = [
  "https://via.placeholder.com/100x50", // Placeholder'ları kendi logo URL'lerinizle değiştirebilirsiniz.
  "https://via.placeholder.com/100x50",
  "https://via.placeholder.com/100x50",
  "https://via.placeholder.com/100x50",
  "https://via.placeholder.com/100x50",
  "https://via.placeholder.com/100x50",
];

const LogoGrid = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row flex-wrap justify-center gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="w-24 h-16 md:w-28 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 ease-in-out">
            <img src={logo} alt={`logo-${index}`} className="object-contain w-full h-full filter brightness-75" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
