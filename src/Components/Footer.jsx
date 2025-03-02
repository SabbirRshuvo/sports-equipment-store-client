import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Sporst Equipment</h2>
            <p className="text-gray-400">
              Your go-to platform for amazing experiences. Stay connected with
              us.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400"> Email: contact@yourwebsite.com</p>
            <p className="text-gray-400"> Phone: +123 456 7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 text-xl transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 text-xl transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 text-xl transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 text-xl transition-all"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
