/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Heavy-Duty Metal Shelving Rack",
    description:
      "Durable industrial storage rack with 5 adjustable shelves, perfect for warehouses and retail stores.",
    image: "https://i.ibb.co.com/Kzmwd600/2148000157.jpg",
  },
  {
    id: 2,
    title: "Point of Sale (POS) System",
    description:
      "Complete POS system with touchscreen monitor, receipt printer, and barcode scanner for efficient transactions.",
    image: "https://i.ibb.co.com/Lzq7ysbx/2149872113.jpg",
  },
  {
    id: 3,
    title: "Commercial Display Refrigerator",
    description:
      "Glass-door display fridge with LED lighting, ideal for showcasing beverages and perishable items.",
    image: "https://i.ibb.co.com/BV77LmMJ/2361.jpg",
  },
  {
    id: 4,
    title: "Electronic Weighing Scale",
    description:
      "High-precision digital weighing scale with LCD display, suitable for grocery and retail stores.",
    image: "https://i.ibb.co.com/rKyyXVvQ/2150275219.jpg",
  },
  {
    id: 5,
    title: "Retail Checkout Counter",
    description:
      "Ergonomic checkout counter with storage compartments, designed for fast and organized transactions.",
    image: "https://i.ibb.co.com/5WSSQGSm/94849.jpg",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="relative  h-[500px] sm:h-[400px] overflow-hidden  w-10/12 mx-auto shadow-md rounded-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center "
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 "></div>
          <div className="relative text-white text-center px-6 sm:px-10 ">
            <motion.h1
              className="text-2xl sm:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {slides[currentIndex].title}
            </motion.h1>
            <motion.p
              className="mt-2 sm:mt-4 text-sm sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {slides[currentIndex].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === currentIndex ? "bg-white w-3 h-3" : "bg-gray-400 "
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
