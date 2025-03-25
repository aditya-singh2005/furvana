import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='absolute h-[15vh] w-full flex justify-center items-center bg-gradient-to-b from-black/25 via-black/15 to-transparent'>
            <div className='h-[65%] w-[35%] items-center flex rounded-full p-5'>
                <ul className='flex text-md text-white font-bold justify-evenly items-center w-full cursor-default'>
                    <li className='text-lg'><Link to="/">Home</Link></li>
                    <li className='text-lg'><Link to="/Adopt">Adopt</Link></li>
                    <li className='text-lg'><Link to="/Contribute">Contribute</Link></li>
                    <li className='text-lg'><Link to="/Contact_Us">Contact us</Link></li>
                </ul>
            </div>
            <div className='absolute right-5 h-[65%] flex items-center justify-center rounded-full p-4 text-sm font-bold text-white'>
                <Link to="/auth">
                    <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200">
                        Sign Up / Login
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
