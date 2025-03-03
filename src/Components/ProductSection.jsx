/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: "Heavy-Duty Metal Shelving Rack",
      description:
        "Durable industrial storage rack with 5 adjustable shelves, perfect for warehouses and retail stores.",
      image:
        "https://i.ibb.co.com/S46fTNRs/craig-lovelidge-AZJMAXn-Hh-Wc-unsplash.jpg",
    },
    {
      id: 2,
      title: "Point of Sale (POS) System",
      description:
        "Complete POS system with touchscreen monitor, receipt printer, and barcode scanner for efficient transactions.",
      image:
        "https://i.ibb.co.com/bj8D4DH5/blake-wisz-t-E6th1h6-Bfk-unsplash.jpg",
    },
    {
      id: 3,
      title: "Commercial Display Refrigerator",
      description:
        "Glass-door display fridge with LED lighting, ideal for showcasing beverages and perishable items.",

      image: "https://i.ibb.co.com/Fb5sg4bm/2149445491.jpg",
    },
    {
      id: 4,
      title: "Electronic Weighing Scale",
      description:
        "High-precision digital weighing scale with LCD display, suitable for grocery and retail stores.",

      image: "https://i.ibb.co.com/mFtR41f9/5404344-54858.jpg",
    },
  ];
  return (
    <div className="py-12 bg-gradient-to-r from-orange-100 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Products Section
        </h2>
        <p className="text-gray-600 mb-10">
          Discover our top-quality store equipment designed for efficiency and
          durability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
