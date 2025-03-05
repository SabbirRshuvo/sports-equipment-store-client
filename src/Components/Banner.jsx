/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slide } from "react-awesome-reveal";

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
    <div>
      <Slide direction="left" triggerOnce>
        <div className="relative h-[500px] sm:h-[400px] w-10/12 mx-auto  rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative text-white text-center px-6 sm:px-10">
                <motion.h1
                  className="text-3xl sm:text-5xl font-extrabold drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {slides[currentIndex].title}
                </motion.h1>
                <motion.p
                  className="mt-3 sm:mt-5 text-sm sm:text-lg max-w-2xl mx-auto drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {slides[currentIndex].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? "bg-white scale-125 shadow-md"
                    : "bg-gray-400 opacity-70 hover:opacity-100"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Banner;
