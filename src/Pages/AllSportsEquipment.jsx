/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router";
const AllSportsEquipment = () => {
  const equipment = useLoaderData();

  const [sortedEquipment, setSortedEquipment] = useState([...equipment]);

  const sortByPrice = () => {
    const sorted = [...sortedEquipment].sort((a, b) => a.price - b.price);
    setSortedEquipment(sorted);
  };

  return (
    <Slide direction="left" triggerOnce>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto p-4 sm:p-6 bg-gradient-to-l from-purple-200 to-orange-200 backdrop-blur-lg shadow-lg rounded-2xl border border-gray-400 mt-8 sm:mt-12 mb-8 sm:mb-12 w-full"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 sm:mb-6 text-center">
          All Sports Equipment
        </h2>

        <div className="flex justify-end mb-4">
          <button
            onClick={sortByPrice}
            className="bg-gradient-to-br from-red-400 to-blue-400 text-white px-3 sm:px-4 py-2 rounded-md transition-all cursor-pointer text-sm sm:text-base"
          >
            Sort by Price
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg">
            {/* Table Head */}
            <thead className="bg-purple-600 text-white text-xs sm:text-sm">
              <tr>
                <th className="py-2 px-2 sm:px-4">Image</th>
                <th className="py-2 px-2 sm:px-4">Name</th>
                <th className="py-2 px-2 sm:px-4">Category</th>
                <th className="py-2 px-2 sm:px-4">Price</th>
                <th className="py-2 px-2 sm:px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedEquipment.length > 0 ? (
                sortedEquipment.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                  >
                    <td className="py-3 px-2 sm:px-4">
                      <img
                        src={item.image}
                        alt={item.itemName}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full"
                      />
                    </td>
                    <td className="py-3 px-2 sm:px-4">{item.itemName}</td>
                    <td className="py-3 px-2 sm:px-4">{item.categoryName}</td>
                    <td className="py-3 px-2 sm:px-4">${item.price}</td>
                    <td className="py-3 px-2 sm:px-4">
                      <Link
                        to={`/equipment_details/${item._id}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 sm:py-2 sm:px-4 rounded-md transition-colors text-xs sm:text-sm"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-sm">
                    No Equipment Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </Slide>
  );
};

export default AllSportsEquipment;
