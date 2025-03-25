import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#FFF8DC] py-14 mt-12">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-xl text-gray-800">Furvana</h3>
            <p className="text-gray-700 mt-3">
              A place where loving homes meet pets in need. Our mission is to
              ensure every animal finds its perfect family.
            </p>
            <div className="flex space-x-4 mt-4 text-gray-700">
              <FaInstagram className="hover:text-yellow-700 cursor-pointer transition duration-300" size={22} />
              <FaFacebookF className="hover:text-yellow-700 cursor-pointer transition duration-300" size={22} />
              <FaTwitter className="hover:text-yellow-700 cursor-pointer transition duration-300" size={22} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl text-gray-800">Quick Links</h3>
            <ul className="mt-3 text-gray-700 space-y-3">
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">About Us</li>
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">Adoption Process</li>
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">Available Pets</li>
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">Success Stories</li>
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">Resources</li>
            </ul>
          </div>

          {/* How You Can Help */}
          <div>
            <h3 className="font-bold text-xl text-gray-800">How You Can Help</h3>
            <ul className="mt-3 text-gray-700 space-y-3">
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">Adopt a Pet</li>
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">Foster a Pet</li>
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">Volunteer</li>
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">Donate</li>
              <li className="hover:text-yellow-700 cursor-pointer transition duration-300">Sponsor a Pet</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-xl text-gray-800">Contact Us</h3>
            <ul className="mt-3 text-gray-700 space-y-4">
              <li className="flex items-center space-x-3">
                <GoLocation className="text-yellow-700" />
                <span>123 Adoption Lane, Pet City, PC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-yellow-700" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-yellow-700" />
                <span>info@furvana.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 border-t pt-6 text-gray-700 text-center text-sm">
          <p>© 2025 Furvana. All rights reserved.</p>
          <p className="flex items-center justify-center mt-3">
            Made with <span className="text-red-500 px-1">❤</span> for all pets seeking homes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
