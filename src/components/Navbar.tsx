import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-700 ">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <p className="text-3xl bg-gray-50 text-gray-900 font-bold py-1 px-2 rounded">
          <Link to="/">Guggal</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
