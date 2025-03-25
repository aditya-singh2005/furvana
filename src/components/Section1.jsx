import React from 'react';
import GridMotion from './GridMotion';

const petImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s'
];


const Section1 = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Grid Motion with Pet Images */}
      <div className="absolute inset-0 opacity-100 p-2">
        <GridMotion items={petImages} />
      </div>

      {/* Content Section */}
      
      <div className="relative z-10 flex flex-col items-center text-white">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
          🐾 Find Your Furry Best Friend! 🏡
        </h1>
        <p className="text-xl max-w-3xl drop-shadow-md opacity-95">
          Give a loving home to a pet in need. Browse through adorable companions waiting for their forever family.  
          Open your heart, adopt today! ❤️
        </p>

        {/* Call-to-Action Button */}
        <button className="mt-6 px-8 py-4 bg-[#FF7F50] text-white text-xl font-semibold rounded-full shadow-lg hover:bg-[#FF6347] hover:scale-105 transition-all duration-300">
          Explore Pets 🐶🐱
        </button>
      
      </div>
    </div>
  );
};

export default Section1;
