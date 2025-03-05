/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle, AiOutlineUpload } from "react-icons/ai";
import { FaStar, FaBoxOpen } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";

const AddEquipment = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch(
      "https://sports-equipment-store-server-ecru.vercel.app/add_equipment",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your operation is successful.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#16a34a",
          });
        }
      });
    setFormData({
      itemName: "",
      categoryName: "",
      description: "",
      price: "",
      rating: "",
      customization: "",
      processingTime: "",
      stockStatus: "",
      image: "",
    });
  };

  return (
    <>
      <Slide direction="right" triggerOnce>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto p-8  bg-gradient-to-br from-blue-200 to-purple-200  backdrop-blur-lg shadow-lg rounded-2xl border border-gray-200 mt-12 mb-12"
        >
          <h2 className="text-2xl font-semibold text-black mb-6 flex items-center gap-2">
            <AiOutlinePlusCircle className="text-blue-500" size={26} />
            Add New Equipment
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label className="text-black mb-1 flex items-center gap-2">
                <AiOutlinePlusCircle /> Item Name
              </label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black mb-1 flex items-center gap-2">
                <BiCategory /> Category
              </label>
              <input
                type="text"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                required
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="text-black mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="textarea textarea-bordered textarea-info w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black mb-1 flex items-center gap-2">
                💰 Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black mb-1 flex items-center gap-2">
                <FaStar /> Rating
              </label>
              <input
                type="number"
                max="5"
                min="1"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="text-black mb-1">Customization</label>
              <textarea
                name="customization"
                value={formData.customization}
                onChange={handleChange}
                className="textarea textarea-bordered textarea-info w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black mb-1">Processing Time</label>
              <input
                type="text"
                name="processingTime"
                value={formData.processingTime}
                onChange={handleChange}
                required
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black mb-1 flex items-center gap-2">
                <FaBoxOpen /> Stock Status
              </label>
              <input
                type="number"
                name="stockStatus"
                value={formData.stockStatus}
                onChange={handleChange}
                required
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="text-black mb-1 flex items-center gap-2">
                <AiOutlineUpload /> Upload Image
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="col-span-2 flex justify-start mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn btn-info text-slate-600 flex items-center gap-2 px-5 py-2 text-lg"
              >
                <AiOutlinePlusCircle size={20} />
                Add Equipment
              </motion.button>
            </div>
          </form>
        </motion.div>
      </Slide>
    </>
  );
};

export default AddEquipment;
