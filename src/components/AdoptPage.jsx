import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Masonry from './React Components/Masonry';
import SearchFilterForm from './SearchFilterForm';

const AdoptPage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/pets') // Updated API endpoint
      .then(res => res.json())
      .then(data => setPets(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='pt-[15vh] min-h-screen w-screen bg-gradient-to-b from-[#F4D088] via-[#C9B89C] to-[#928D82]'> 
        <div className='min-h-screen w-full flex flex-col gap-4 bg-[#F4D088] p-2'>
          <div className='bg-[#D4A373] w-full rounded-2xl h-[8vh] flex items-center px-6'>
            <h1 className='text-2xl font-bold text-white'>Find Your Perfect Companion</h1>
          </div>
          <div className='flex w-full rounded-3xl h-full flex-1 overflow-hidden bg-[#ddb892ea]'>
            <div className='search-and-filter bg-[#DDB892] w-1/5 h-full p-4'>
              <h2 className='font-bold text-lg mb-8 text-[#6D4C41]'>Search and Filters</h2>
              <SearchFilterForm />
            </div>
            <div className='adopt-dog-display bg-[#E6CCB2] w-4/5 h-full p-2 overflow-auto'>
              <Masonry data={pets} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptPage;
