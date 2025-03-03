/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaFutbol,
  FaBasketballBall,
  FaRunning,
  FaSwimmer,
} from "react-icons/fa";

const SportsCategory = () => {
  const sportsCategories = [
    {
      id: 1,
      title: "Football",
      description:
        "Experience the thrill of the game with top football gear and accessories.",
      icon: <FaFutbol className="text-4xl text-green-500" />,
      image: "https://i.ibb.co.com/bYDJcg2/max-titov-xt-RWIviknsw-unsplash.jpg",
    },
    {
      id: 2,
      title: "Basketball",
      description:
        "High-quality basketball equipment for professionals and enthusiasts.",
      icon: <FaBasketballBall className="text-4xl text-orange-500" />,
      image:
        "https://i.ibb.co.com/n84jcJn3/tim-mossholder-5vh4cr-JBztg-unsplash.jpg",
    },
    {
      id: 3,
      title: "Athletics",
      description: "Train with the best gear designed for speed and endurance.",
      icon: <FaRunning className="text-4xl text-blue-500" />,
      image:
        "https://i.ibb.co.com/8LhKk82F/josh-gordon-fz-Hm-P6z8-OQ4-unsplash.jpg",
    },
    {
      id: 4,
      title: "Swimming",
      description:
        "Premium swimming accessories and gear for all skill levels.",
      icon: <FaSwimmer className="text-4xl text-teal-500" />,
      image:
        "https://i.ibb.co.com/Pzst3JvW/gentrit-sylejmani-Jj-Uyj-E-o-Eb-M-unsplash.jpg",
    },
  ];
  return (
    <div className="py-12 bg-gradient-to-r from-indigo-100 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Sports Categories
        </h2>
        <p className="text-gray-600 mb-10">
          Explore different sports and find the best equipment for your passion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sportsCategories.map((sport, index) => (
            <motion.div
              key={sport.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={sport.image}
                alt={sport.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <div className="flex justify-center">{sport.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mt-3">
                  {sport.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {sport.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsCategory;
