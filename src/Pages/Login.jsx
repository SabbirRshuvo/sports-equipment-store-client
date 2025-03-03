import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
const Login = () => {
  const { handleSignIn, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const profileData = { email, password };
    console.log(profileData);
    handleSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successful!",
          text: "Your account has been login successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        navigate(location.state?.from);
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: `username && passoword not matching,  `,
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome, ${result.user.displayName}!`,
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);

        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <>
      <div className="flex gap-6   bg-gradient-to-b from-orange-200 to-indigo-200">
        <div className="min-h-[500px] my-10 flex items-center justify-center  px-4 w-full">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <HiOutlineMail className="text-white text-2xl" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center">Welcome back!</h2>
            <p className="text-gray-600 text-center">
              Please enter your email and password
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <HiOutlineMail />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="email here"
                    className="w-full px-10 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-400 focus:outline-none "
                  />
                </div>
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

              <div className="text-right">
                <Link to="/forgot-password" className="text-orange-600 text-sm">
                  Forgot password?
                </Link>
              </div>

              <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-700 cursor-pointer transition-colors">
                Sign In
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="border-t flex-grow"></div>
              <span className="mx-2 text-gray-500">or continue with</span>
              <div className="border-t flex-grow"></div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleGoogle}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer"
              >
                <FcGoogle className="text-xl " />
                <span className="ml-2">Google</span>
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer">
                <FaGithub className="text-xl" />
                <span className="ml-2">Github</span>
              </button>
            </div>

            <p className="text-center mt-4 text-gray-600">
              {`Don't have any account yet? `} {""}
              <Link to="/register" className="text-blue-600 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
