import React, { useEffect, useState } from "react";

const Section2 = () => {
  // Floating Paw Print Animation
  const [paws, setPaws] = useState([]);

  useEffect(() => {
    const pawArray = Array.from({ length: 12 }).map(() => ({
      left: Math.random() * 100 + "vw",
      top: Math.random() * 100 + "vh",
      delay: Math.random() * 5 + "s",
    }));
    setPaws(pawArray);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-[#FFF4E1] px-1 py-2 md:px-2 overflow-hidden">
      {/* Floating Paw Prints */}
      {paws.map((paw, index) => (
        <div
          key={index}
          className="absolute text-2xl opacity-20 animate-float"
          style={{
            left: paw.left,
            top: paw.top,
            animationDelay: paw.delay,
          }}
        >
          🐾
        </div>
      ))}

<div className="w-full max-w-[99%] h-full max-h-[94%] flex flex-col md:flex-row bg-[#FAE7C0] shadow-xl rounded-xl overflow-hidden">

        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-3 py-4 md:px-5 md:py-6 bg-[#F9DFC6] shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            🐾 Every Pet Deserves Love! 🏡
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Looking for a furry friend? <span className="font-semibold text-orange-500"> Furvana</span> connects you with adorable pets waiting for a forever home.  
            Give them a second chance, and they'll give you a lifetime of love. ❤️
          </p>

          <ul className="mt-3 text-lg text-gray-700 space-y-1">
            <li className="flex items-center">
              <span className="text-2xl mr-2">🐶</span> Smart Pet Matching – Find pets that fit your lifestyle.
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-2">🐕</span> Trusted Shelters – Adopt safely from verified sources.
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-2">🐱</span> Hassle-Free Process – Quick and stress-free adoption.
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-2">🐾</span> Expert Pet Care– Essential tips for a happy companion.
            </li>
          </ul>

          {/* Call-to-Action Button */}
          <button className="mt-4 px-6 py-3 bg-[#FF6F3D] text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:bg-[#FF5B2D] hover:scale-105 transition-all duration-300">
            🐶 Find Your Furry Friend! 🐱
          </button>
        </div>
        
        {/* Right Image Container with Overlay */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center p-1 md:p-2 bg-[#F9DFC6] rounded-r-xl">
          <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://image.petmd.com/files/styles/978x550/public/2023-06/red-australian-cattle-dog.jpg"
              alt="Adorable Pet" 
              className="w-full h-full object-cover rounded-2xl m-2 -lg transition-transform duration-300 hover:scale-105"
            />

            {/* Overlay with Text */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent text-white px-4 py-2 rounded-b-lg">
              <h3 className="text-xl font-bold">🏡 500+ Happy Adoptions!</h3>
              <p className="text-md text-gray-200 mt-1">
                Give a pet a second chance at life. <span className="font-semibold text-yellow-300">Find your perfect match today! 🐾</span>
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Paw Animation CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-15px); opacity: 0.4; }
          100% { transform: translateY(0); opacity: 0.2; }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out alternate;
        }
      `}</style>
    </div>
  );
};

export default Section2;
