/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router";
import errorAnimation from "../assets/lottie.json";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Lottie animationData={errorAnimation} loop={true} />
      </motion.div>

      <h1 className="text-4xl font-bold text-gray-800 mt-6">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 text-lg mt-2">
        The page you're looking for doesn't exist.
      </p>

      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-info mt-6"
        >
          Go Home
        </motion.button>
      </Link>
    </div>
  );
};

export default Error;
