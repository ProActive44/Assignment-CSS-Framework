import React from "react";

const Home = () => {
  return (
    <div className="my-10 text-left p-20">
      <div className="">
        <button className="text-white bg-blue-700">Button one</button>
      </div>

      <div className="bg-red-100 text-red-500 p-3 font-semibold my-10 border-red-500 border-2 rounded">
        <p>
          <span className="font-extrabold">Alert! </span>This is awesome!
        </p>
      </div>

      <div className="text-black flex border p-2 w-[450px] justify-between items-center m-auto gap-10">
        <div>
          <img
            src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
            alt="kalvium Image"
          />
        </div>
        <div className="font-bold">
          <p className="text-2xl">Kalvium Store</p>
          <p >You have a new course!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
