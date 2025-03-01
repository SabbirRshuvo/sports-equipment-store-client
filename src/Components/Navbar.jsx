import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/all_sports_equpment">All Sports Equipment</Link>
      <Link to="/add_equpment">Add Equipment</Link>
      <Link to="/my_equpment">My Equipment List</Link>
      <Link>Profile</Link>
    </div>
  );
};

export default Navbar;
