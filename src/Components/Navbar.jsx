import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.jpg";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleSignOut } = useContext(AuthContext);
  return (
    <nav className="shadow-md bg-gradient-to-r from-orange-500 to-indigo-500 text-white fixed top-0 left-0 w-full z-50">
      <div className="navbar container mx-auto py-3 px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            alt="Logo"
          />
          <span className="text-lg tracking-wide">Sports</span>
        </Link>
        <div className="hidden md:flex gap-6 text-lg">
          <Link
            to="/"
            className="btn btn-ghost hover:text-green-600 transition-all"
          >
            Home
          </Link>
          <Link
            to="/all_sports"
            className="btn btn-ghost hover:text-green-600 transition-all"
          >
            All Sports
          </Link>
          <Link
            to="/add_equpment"
            className="btn btn-ghost hover:text-green-600 transition-all"
          >
            Add Equipment
          </Link>
          <Link
            to="/equipment_list"
            className="btn btn-ghost hover:text-green-600  transition-all"
          >
            Equipment List
          </Link>
        </div>
        <div className="hidden md:flex">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-slate-500 text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-all px-6 shadow-md"
            >
              Sign In
            </Link>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
            {isOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-white text-gray-800 py-4 px-6 space-y-4 rounded-b-lg shadow-md transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="block text-lg py-2 border-b border-gray-300 hover:text-orange-600"
        >
          Home
        </Link>
        <Link
          to="/all_sports"
          className="block text-lg py-2 border-b border-gray-300 hover:text-orange-600"
        >
          All Sports
        </Link>
        <Link
          to="/add_equpment"
          className="block text-lg py-2 border-b border-gray-300 hover:text-orange-600"
        >
          Add Equpment
        </Link>
        <Link
          to="/equipment_list"
          className="block text-lg py-2 border-b border-gray-300 hover:text-orange-600"
        >
          Equpment List
        </Link>
        {user ? (
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-500  rounded-box z-1 mt-3 w-52 p-2 shadow text-white"
            >
              <li>
                <a>{user.displayName}</a>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-all px-6 shadow-md"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
