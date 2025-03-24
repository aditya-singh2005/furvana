import React from 'react';

const Section2 = () => {
  return (
    <div className='bg-red-100 min-h-screen flex justify-center items-center p-10'>
      <div className='bg-green-200 flex flex-col md:flex-row h-auto w-full max-w-7xl p-8 rounded-lg shadow-lg'>
        {/* Left Content */}
        <div className='bg-blue-200 w-full md:w-1/2 p-10 rounded-lg flex flex-col justify-center shadow-md'>
          <h1 className='text-4xl font-bold text-gray-800 mb-6'>Find Your Furry Friend!</h1>
          <p className='text-gray-700 text-lg'>
            Looking for a loving companion? <span className='font-semibold'>Furvana</span> makes pet adoption easy and joyful. 
            Browse adorable pets, learn about their unique personalities, and bring home a best friend today!
          </p>
          <ul className='mt-6 space-y-3 text-gray-700 text-lg'>
            <li className='flex items-center'><span className='text-green-600 font-bold mr-2'>✔</span> AI-powered pet matching</li>
            <li className='flex items-center'><span className='text-green-600 font-bold mr-2'>✔</span> Verified adoption centers</li>
            <li className='flex items-center'><span className='text-green-600 font-bold mr-2'>✔</span> Easy application process</li>
            <li className='flex items-center'><span className='text-green-600 font-bold mr-2'>✔</span> Health and care tips</li>
          </ul>
        </div>
        
        {/* Right Image Placeholder */}
        <div className='bg-yellow-200 w-full md:w-1/2 flex items-center justify-center p-6 rounded-lg shadow-md'>
          <img 
            src='https://image.petmd.com/files/styles/978x550/public/2023-06/red-australian-cattle-dog.jpg'
            alt='Adorable Pet' 
            className='rounded-lg shadow-md w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
