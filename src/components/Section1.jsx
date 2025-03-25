import React from 'react';
import GridMotion from './GridMotion';

const petImages = [
  'https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=400&h=400&fit=crop', // Dog
  'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=400&h=400&fit=crop', // Cat
  'https://images.unsplash.com/photo-1541599540903-216a46ca1dc1?q=80&w=400&h=400&fit=crop', // Puppy
  'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=400&h=400&fit=crop', // Cat
  'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=400&h=400&fit=crop', // Dog
  'https://images.unsplash.com/photo-1601758003122-d6aa74a3f618?q=80&w=400&h=400&fit=crop', // Cute dog
  'https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=400&h=400&fit=crop', // Another puppy
];

const Section1 = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Grid Motion with Pet Images */}
      <div className="absolute inset-0 opacity-30">
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
