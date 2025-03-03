/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyEquipment = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 bg-gradient-to-l from-purple-200 to-orange-200 backdrop-blur-lg shadow-lg rounded-2xl border border-gray-400 mt-12 mb-12"
    >
      <h2 className="text-2xl font-semibold text-black mb-6 text-center">
        All Sports Equipment
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-white bg-blue-600">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((item, index) => (
                <tr key={item._id} className="hover">
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={item.photo}
                      alt=""
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td className="flex gap-2 w-1/2">
                    <Link to="/" className="btn  btn-sm">
                      <FaEdit />
                    </Link>
                    <button className="bg-red-500 p-2 rounded-md text-black shadow-md cursor-pointer">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-black py-4">
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

export default MyEquipment;
