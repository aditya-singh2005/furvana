import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
    referralSource: "",
    receiveUpdates: "yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-600 relative overflow-hidden">
      {/* Full Background Paw Print Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/footprints.png')] opacity-20"></div>

      {/* Animated Floating Paws */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-[url('/paw-icon.svg')] bg-contain opacity-40 animate-bounce"></div>
      <div className="absolute top-32 right-12 w-20 h-20 bg-[url('/paw-icon.svg')] bg-contain opacity-40 animate-bounce delay-500"></div>
      <div className="absolute bottom-16 left-1/4 w-24 h-24 bg-[url('/paw-icon.svg')] bg-contain opacity-30 animate-bounce delay-700"></div>
      <div className="absolute bottom-8 right-20 w-16 h-16 bg-[url('/paw-icon.svg')] bg-contain opacity-30 animate-bounce delay-900"></div>

      {/* Contact Card */}
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">Contact Us 🐶</h2>
        <p className="text-center text-gray-600 mt-2">We’d love to hear from you! 🐾</p>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
              placeholder="John Doe"
            />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
              placeholder="johndoe@example.com"
            />
          </div>

          {/* Phone Number */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="123-456-7890"
            />
          </div>

          {/* Subject Input */}
            {/* <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                placeholder="Adoption Inquiry, Volunteering, etc."
              />
            </div> */}

          {/* Inquiry Type Dropdown */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Inquiry Type</label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
            >
              <option value="">Select an option</option>
              <option value="adoption">Pet Adoption Inquiry</option>
              <option value="donation">Donation/Support</option>
              <option value="volunteer">Volunteer Opportunity</option>
              <option value="general">General Questions</option>
            </select>
          </div>

          {/* New: How Did You Hear About Us? */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">How Did You Hear About Us?</label>
            <select
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            >
              <option value="">Select an option</option>
              <option value="social_media">Social Media</option>
              <option value="friend">Friend/Word of Mouth</option>
              <option value="event">Event or Adoption Drive</option>
              <option value="search_engine">Google/Search Engine</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message Input */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition h-24 resize-none"
              required
              placeholder="Tell us how we can help!"
            />
          </div>

          {/* Receive Updates (Yes/No) */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Would You Like to Receive Updates?</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="receiveUpdates"
                  value="yes"
                  checked={formData.receiveUpdates === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="receiveUpdates"
                  value="no"
                  checked={formData.receiveUpdates === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 text-white bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg hover:scale-105 transition duration-300 shadow-lg"
          >
            Send Message ✉️
          </button>
        </form>
      </div>
    </div>
  );  
};

export default ContactUs;
