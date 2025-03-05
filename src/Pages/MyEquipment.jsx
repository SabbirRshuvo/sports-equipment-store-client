/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const MyEquipment = () => {
  const equipmentList = useLoaderData();
  const [deletedData, setDeletedData] = useState(equipmentList);

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
        fetch(
          `https://sports-equipment-store-server-ecru.vercel.app/add_equipment/${id}`,
          {
            method: "DELETE",
          }
        )
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
  console.log(equipmentList);
  return (
    <div className="py-16  rounded-xl">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {deletedData.length > 0 ? (
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            My Equipment List
          </h2>
        ) : (
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            No Equipment Available here.
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {deletedData.map((item) => (
            <motion.div
              key={item._id}
              className="shadow-lg rounded-2xl p-6 transition-all duration-300 bg-white flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="flex-1 text-center md:text-left my-2 ">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.categoryName}
                </h3>
                <p className="text-sm font-medium text-gray-700 mt-1">
                  Price: {item.price}$
                </p>
              </div>
              <div className="flex space-x-3">
                <Link
                  to={`/update_equipment/${item._id}`}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                >
                  <FaEdit className="h-5 w-5" />
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 cursor-pointer"
                >
                  <FaTrash className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEquipment;
