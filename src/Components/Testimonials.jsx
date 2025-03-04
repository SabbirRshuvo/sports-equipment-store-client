/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sabbir",
      review: "Amazing products! The football is top-notch quality.",
      rating: 5,
      image: "https://i.ibb.co.com/spGx8bCd/linkde-profile.png",
    },
    {
      id: 2,
      name: "Safia",
      review: "Best store for sports gear. Fast delivery & great service!",
      rating: 4,
      image: "https://i.ibb.co.com/HpkgNhpK/DSC-1880-1.jpg",
    },
    {
      id: 3,
      name: "Emran",
      review: "Bought basketball gear, and it's worth every penny.",
      rating: 5,
      image: "https://i.ibb.co.com/tM7Zw00p/5980298-1.jpg",
    },
  ];
  return (
    <section className="py-12 bg-gray-100  shadow-xl rounded-2xl ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Customer Reviews
        </h2>
        <p className="text-gray-600 mb-10">What our customers are saying.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-5 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{testimonial.review}</p>
              <div className="flex justify-center mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
