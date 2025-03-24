import React from 'react'
import GridMotion from './GridMotion'

const Section1 = () => {
  return (
    <div className='p-4  relative'>
        <GridMotion className='border-4  relative z-0'/>
        
        <div className='absolute inset-0 flex items-center justify-center bg-transparent z-50'>
            <h1 className='text-white text-3xl font-bold z-50'>hiiiiiiiii</h1>
        </div>
    </div>
  )
}

export default Section1;
