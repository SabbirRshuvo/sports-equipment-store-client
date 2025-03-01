import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex gap-6 bg-gray-50">
        <div className="min-h-screen flex items-center justify-center  px-4 w-full">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <HiOutlineMail className="text-white text-2xl" />
              </div>
            </div>

            {/* Welcome Message */}
            <h2 className="text-2xl font-bold text-center">Welcome back!</h2>
            <p className="text-gray-600 text-center">
              Please enter your credentials to sign in!
            </p>

            {/* Form */}
            <form className="mt-6 space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-gray-700">Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <HiOutlineMail />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="admin-01@ecme.com"
                    className="w-full px-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-gray-700">Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <HiOutlineLockClosed />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    name="password"
                    className="w-full px-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link to="/forgot-password" className="text-blue-600 text-sm">
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer">
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="border-t flex-grow"></div>
              <span className="mx-2 text-gray-500">or continue with</span>
              <div className="border-t flex-grow"></div>
            </div>

            {/* Social Login */}
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <FcGoogle className="text-xl" />
                <span className="ml-2">Google</span>
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <FaGithub className="text-xl" />
                <span className="ml-2">Github</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center mt-4 text-gray-600">
              Don not have an account yet?{" "}
              <Link to="/register" className="text-blue-600 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="min-h-screen  items-center justify-center   w-full hidden md:flex">
          <img src="" alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Login;
