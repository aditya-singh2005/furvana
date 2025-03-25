import React, { useState } from "react";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-500 relative overflow-hidden">
      {/* Cute Paw Print Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/footprints.png')] opacity-20"></div>

      {/* Card Container */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {isSignUp ? "Join the Furvana Family! 🐾" : "Welcome Back, Pet Lover! 🐶"}
        </h2>

        <form onSubmit={handleSubmit} className="mt-6">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                required
              />
            </div>
          )}

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 text-white bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg hover:scale-105 transition duration-300 shadow-lg"
          >
            {isSignUp ? "Sign Up & Find a Pet! 🐕" : "Login to Adopt 🐾"}
          </button>
        </form>

        {/* Toggle Login/Signup */}
        <p className="mt-6 text-sm text-center text-gray-600">
          {isSignUp ? "Already part of Furvana?" : "New to Furvana?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-orange-500 font-semibold hover:underline ml-1"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
