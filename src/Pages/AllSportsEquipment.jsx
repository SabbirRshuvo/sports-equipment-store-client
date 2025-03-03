/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const AllSportsEquipment = () => {
  const equipment = useLoaderData();
  const [deletedData, setDeletedData] = useState(equipment);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/add_equipment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const newData = deletedData.filter((item) => id !== item._id);
            setDeletedData(newData);
          });
      }
    });
  };

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
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deletedData.length > 0 ? (
              deletedData.map((item, index) => (
                <tr key={item._id} className="hover">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.itemName}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td>{item.itemName}</td>
                  <td>{item.categoryName}</td>
                  <td>${item.price}</td>
                  <td className="flex gap-2 w-1/2">
                    <Link
                      to={`/equipment_details/${item._id}`}
                      className="btn  btn-sm"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 p-2 rounded-md text-black shadow-md cursor-pointer"
                    >
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

export default AllSportsEquipment;
