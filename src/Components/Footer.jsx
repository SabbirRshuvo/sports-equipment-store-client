import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Website Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">Sports-Equipment</h2>
            <p className="text-sm mt-2">
              Your one-stop solution for all your needs. Explore our services
              and stay connected.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="mt-2">Email: support@yourwebsite.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-between items-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-400 rounded-full hover:bg-blue-500 transition"
            >
              <FaTwitter className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition"
            >
              <FaLinkedinIn className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
