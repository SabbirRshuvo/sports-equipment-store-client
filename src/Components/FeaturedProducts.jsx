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
    <section className="py-12  my-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6  ">
            Featured Products
          </h2>
          <p className="text-gray-600 mb-10">
            Product features are specific traits or attributes that define a
            product and provide value to the customer, distinguishing it from
            competitors and addressing their needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute top-0 left-0 bg-orange-500 text-white py-1 px-3 m-4 rounded-full text-sm font-semibold uppercase">
                  New
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-lg text-orange-500 font-bold">
                  ${product.price}
                </p>
                <button className="mt-3 bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-lg uppercase tracking-wide focus:outline-none">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
