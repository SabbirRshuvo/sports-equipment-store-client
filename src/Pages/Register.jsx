import { useContext, useState } from "react";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router";
import { FaCameraRetro, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
  const { handleRegister } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const profileData = { name, email, photo, password };
    console.log(profileData);
    handleRegister(email, password, name, photo)
      .then(() => {
        Swal.fire({
          title: "Registration Successful!",
          text: "Welcome to our website",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <>
      <div className="flex gap-6 ">
        <div className="min-h-[500px] flex items-center justify-center  px-4 w-full my-10">
          <div className="w-full max-w-md  p-8 rounded-lg shadow-xl bg-white">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <HiOutlineMail className="text-white text-2xl" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <p className="text-gray-600 text-center">
              And lets get started with your free trial!
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700">User name</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-10 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-400 focus:outline-none "
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <HiOutlineMail />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-10 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-400 focus:outline-none "
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Photo URL</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <FaCameraRetro />
                  </span>
                </div>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo URL"
                  className="w-full px-10 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-400 focus:outline-none"
                />
              </div>
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
                    className="w-full px-10 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-400 focus:outline-none "
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    required
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
              <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-700 cursor-pointer transition-colors">
                Sign Up
              </button>
            </form>
            <p className="text-center mt-4 text-gray-600">
              Already have an Acctount?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
