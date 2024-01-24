import React from "react";

const Homepage = () => {
  return (
    <div className="container bg-cover bg-center h-screen">
      <div className="tint absolute top-0 left-0 right-0 bottom-0 bg-black opacity-90">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="tint absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="h-auto absolute xl:top-64  md:top-2/4  top-1/4 xl:left-20 text-white">
            <h1 className="xl:text-7xl text-3xl  text-left font-bold">
              67th Milestone
              <br />
              Hero’s Challenge
            </h1>
          </div>
          <div className="absolute xl:top-2/3 top-2/3  xl:left-20 sm:left-5 flex items-center text-white">
            <div className="infobox flex flex-col items-center justify-around xl:p-2 p-1 bg-white text-black">
              <span className="date xl:text-2xl text-sm font-bold">01</span>
              <span className="underline w-full h-0.5 bg-black"></span>
              <span className="month xl:text-2xl text-sm font-bold">MAR</span>
            </div>
            <p className=" ml-4 xl:text-lg  text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
