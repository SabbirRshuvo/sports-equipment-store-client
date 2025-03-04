/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router";
const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: "Professional Basketball Hoop",
      description:
        "Adjustable height, shatterproof backboard, and durable rim for indoor and outdoor play.",
      image: "https://i.ibb.co.com/PGKBFHvt/2150847360.jpg",
    },
    {
      id: 2,
      title: "Premium Soccer Ball",
      description:
        "FIFA-approved match ball with high-quality PU leather and excellent grip for all weather conditions.",
      image: "https://i.ibb.co.com/Q7VjDHqZ/2632436-378985-PBQIF1-101.jpg",
    },
    {
      id: 3,
      title: "Tennis Racket Set",
      description:
        "Lightweight graphite frame racket with anti-slip grip and two tennis balls included.",
      image:
        "https://i.ibb.co.com/DffsDYBF/alicja-gancarz-wv-DELs-J-E20-unsplash.jpg",
    },
    {
      id: 4,
      title: "Adjustable Dumbbell Set",
      description:
        "Compact, all-in-one adjustable dumbbells ranging from 5-50 lbs, perfect for home workouts.",
      image: "https://i.ibb.co.com/dJ7F6tCM/2151114124.jpg",
    },
    {
      id: 5,
      title: "Boxing Gloves & Punching Bag",
      description:
        "Durable PU leather gloves with shock-absorbing padding and heavy-duty punching bag.",
      image: "https://i.ibb.co.com/Y7vfRRkz/2148353090.jpg",
    },
    {
      id: 6,
      title: "Foldable Treadmill",
      description:
        "Space-saving treadmill with LCD display, speed control, and multiple workout modes.",
      image: "https://i.ibb.co.com/Wpd25DG9/2150164765.jpg",
    },
  ];
  return (
    <div className="py-16  rounded-xl">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our Products
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Premium store equipment for efficiency & durability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="shadow-lg rounded-2xl p-6 transition-all duration-300 bg-white flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mt-4">
                  {product.title}
                </h3>
              </div>
              <Link to={`/product/${product.id}`} state={{ product }}>
                <button className="mt-4 btn btn-accent w-full">
                  View Details
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
