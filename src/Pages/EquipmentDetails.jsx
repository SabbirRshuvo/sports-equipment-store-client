/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const EquipmentDetails = () => {
  const item = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto p-8 bg-white/20 backdrop-blur-lg shadow-xl rounded-3xl border border-gray-300 mt-20 mb-12 relative"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          {item.itemName}
        </h2>
        <img
          src={item.image}
          alt={item.itemName}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <div className="grid grid-cols-2 gap-6 text-gray-700">
          <Fade>
            <p className="font-medium">
              <strong className="text-gray-900">Category:</strong>{" "}
              {item.categoryName}
            </p>
          </Fade>
          <p className="font-medium">
            <strong className="text-gray-900">Price:</strong> ${item.price}
          </p>
          <p className="font-medium">
            <strong className="text-gray-900">Rating:</strong> ⭐ {item.rating}
          </p>
          <p className="font-medium">
            <strong className="text-gray-900">Customization:</strong>{" "}
            {item.customization}
          </p>
          <p className="font-medium">
            <strong className="text-gray-900">Processing Time:</strong>{" "}
            {item.processingTime}
          </p>
          <p className="font-medium">
            <strong className="text-gray-900">Stock Status:</strong>{" "}
            {item.stockStatus} available
          </p>
        </div>

        <p className="text-lg text-gray-800 mt-6 leading-relaxed bg-gray-100 p-4 rounded-lg shadow">
          <strong>Description:</strong> {item.description}
        </p>

        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 w-40 mx-auto cursor-pointer"
        >
          Previous
        </motion.button>
      </motion.div>
    </>
  );
};

export default EquipmentDetails;
