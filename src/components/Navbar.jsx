import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-6 py-2 justify-between items-center bg-red-400 font-semibold border-t-purple-800 border-t-4">
      <div className="flex gap-10">
        <div>
          <h1 className="text-2xl">Kalvium</h1>
        </div>
        <div className="flex items-center gap-4">
          <p>About Us</p>
          <p>Contacts</p>
          <p>Courses</p>
        </div>
      </div>
      <div className="border rounded hover:border-transparent hover:bg-red-500 ">
        <button className="bg-transparent ">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
