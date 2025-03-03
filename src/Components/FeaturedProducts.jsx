/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Professional Football",
      price: "$39.99",
      image: "https://i.ibb.co.com/k63V9j1K/16334.jpg",
    },
    {
      id: 2,
      name: "Basketball Hoop Set",
      price: "$79.99",
      image: "https://i.ibb.co.com/whTKkvhD/2147925342.jpg",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "$59.99",
      image: "https://i.ibb.co.com/W7LxgDC/3414.jpg",
    },
    {
      id: 4,
      name: "Swimming Goggles",
      price: "$19.99",
      image:
        "https://i.ibb.co.com/Zzqxdhh5/maarten-van-den-heuvel-VAd-Fz-JJDzgg-unsplash.jpg",
    },
  ];
  return (
    <section className="py-12 bg-slate-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Featured Products
        </h2>
        <p className="text-gray-600 mb-10">
          Shop our best-selling sports equipment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-gray-100 rounded-lg shadow-md p-5 text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                {product.name}
              </h3>
              <p className="text-lg text-orange-500 font-bold mt-2">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
