import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginSignup = () => {
  // State to manage email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Log email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='bg-[#716346] h-screen w-screen flex justify-center items-center'>
      <div className='h-3/4 w-1/2 bg-transparent rounded-3xl flex'>
        <div className='bg-amber-300 h-full w-2/5 rounded-[50%]'>
          <img src="/icons/login-cat.png" className='h-full w-full object-cover rounded-l-[10vh]' alt="Login image" />
        </div>
        <div className='border-2 bg-[rgba(244,208,136,255)] h-full w-3/5 rounded-r-[2vh]'>
          {/* Wrap the entire content in a form */}
          <form onSubmit={handleSubmit} className='h-full w-full p-10'>
            {/* Header */}
            <div className='h-[20%] w-full flex items-center mb-5'>
              <img src="/icons/furvana-logo.png" className="w-25 h-25 rounded-[50%] ml-20" alt="furvana-logo.png" />
              <h1 className='ml-8 text-3xl font-bold'>Login</h1>
            </div>

            {/* Email Input */}
            <div className='h-[20%] w-full'>
              <label className='text-lg font-semibold mb-1'>Email</label>
              <div className='flex items-center bg-white p-2 rounded-xl'>
                <FaEnvelope className="text-black ml-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-1 ml-2 text-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className='h-[20%] w-full '>
              <label className='text-lg font-semibold mb-1'>Password</label>
              <div className='flex items-center bg-white p-2 rounded-xl'>
                <FaLock className="text-black ml-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-1 ml-2 text-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end mt-2">
                <a href="#" className="text-sm text-blue-700 font-semibold underline">Forgot Password?</a>
              </div>
            </div>

            {/* Login Button */}
            <div className='h-[10%] w-full mt-4'>
              <button 
                type="submit" 
                className='w-full bg-amber-500 rounded-[20vh] font-bold text-xl flex justify-center items-center p-2'
              >
                Login
              </button>
            </div>

            {/* OR Section with Solid Lines */}
            <div className='w-full h-[20%] '>
              <div className='w-full h-[20%] mt-4 flex items-center'>
                <hr className="flex-grow border-t border-gray-800" />
                <h2 className="mx-4 font-semibold">Or Continue With</h2>
                <hr className="flex-grow border-t border-gray-800" />
              </div>
              <div className='flex justify-center space-x-6 mt-4'>
                <img src="/icons/google-logo.png" className='w-8 h-8' alt="google-logo.png"></img>
                <img src="/icons/facebook-logo.png" className='w-8 h-8' alt="facebook-logo.png"></img>
                <img src="/icons/apple-logo.png" className='w-8 h-8' alt="apple-logo.png"></img>
              </div>

              <div className='w-full p-2 flex justify-center items-center mt-4 '>
                <h1 className='font-bold text-sm '>Dont have an account?</h1> 
                <a className='text-blue-700 font-semibold text-sm underline ml-1 cursor-pointer'> Sign Up here!</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;