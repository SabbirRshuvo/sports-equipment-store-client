/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
const AllSportsEquipment = () => {
  const equipment = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 bg-gradient-to-l from-purple-200 to-orange-200 backdrop-blur-lg shadow-lg rounded-2xl border border-gray-400 mt-12 mb-12"
    >
      <h2 className="text-3xl font-semibold text-black mb-6 text-center">
        All Sports Equipment
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipment.length > 0 ? (
              equipment.map((item, index) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="py-4 px-6">
                    <img
                      src={item.image}
                      alt={item.itemName}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </td>
                  <td className="py-4 px-6">{item.itemName}</td>
                  <td className="py-4 px-6">{item.categoryName}</td>
                  <td className="py-4 px-6">${item.price}</td>
                  <td className="py-4 px-6">
                    <Link
                      to={`/equipment_details/${item._id}`}
                      className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No Equipment Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AllSportsEquipment;
