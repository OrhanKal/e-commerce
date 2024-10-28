import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="bg-[#FAFAFA] w-full py-8">
      <div className="container mx-auto p-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-xl text-blue-500 font-semibold mb-2">ABOUT COMPANY</h2>
          <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
          <p className="text-gray-600 mb-4">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Get Quote Now
          </button>
        </div>
        <div className="flex-1">
          <img src="https://via.placeholder.com/400x400" alt="About Us" className="w-full h-auto rounded-lg object-cover" />
        </div>
      </div>

      {/* Hakkımızda Ekstra Bölüm */}
      <div className="container mx-auto p-8 flex flex-col lg:flex-row items-center justify-center gap-8 text-center lg:text-left">
        <div className="flex-1">
          <h3 className="text-xl text-red-500 font-semibold mb-2">Problems trying</h3>
          <div className='lg:flex'>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
          </div>
        </div>
      </div>

      {/* Sayılarla İstatistikler */}
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold">15K</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">150K</h2>
          <p className="text-gray-600">Monthly Visitors</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">15</h2>
          <p className="text-gray-600">Countries Worldwide</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">100+</h2>
          <p className="text-gray-600">Top Partners</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
