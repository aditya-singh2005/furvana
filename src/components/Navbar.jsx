import React from 'react';

function Navbar() {
    return (
        <div className='absolute h-[15vh] w-full flex justify-center items-center bg-gradient-to-b from-black/25  via-black/15 to-transparent'>
            <div className='h-[65%] w-[35%] items-center flex rounded-full p-5'>
                <ul className='flex text-md text-white font-bold justify-evenly items-center w-full cursor-default'>
                    <li>Home</li>
                    <li>Adopt</li>
                    <li>Contribute</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='absolute right-5 h-[65%] flex items-center justify-center rounded-full p-4 text-sm font-bold text-white'>
                <button>Sign Up / Login</button>
            </div>
        </div>
    );
}

export default Navbar;
