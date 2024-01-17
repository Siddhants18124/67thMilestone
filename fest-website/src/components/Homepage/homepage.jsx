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

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div class="h-auto absolute xl:top-64  md:top-2/4  top-1/4 xl:left-20 text-white">
          <h1 className="xl:text-7xl text-3xl  text-left font-bold">
            67th Milestone
            <br />
            Hero’s Challenge
          </h1>
          </div>
          <div class="absolute xl:top-2/3 top-2/3  xl:left-20 sm:left-5 flex items-center text-white">
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

    // <section class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
    //   <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

    //   <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    //     <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    //       <h1 class="text-3xl font-extrabold sm:text-5xl">
    //         Let us find your
    //         <strong class="block font-extrabold text-rose-700">
    //           {" "}
    //           Forever Home.{" "}
    //         </strong>
    //       </h1>

    //       <p class="mt-4 max-w-lg sm:text-xl/relaxed">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
    //         illo tenetur fuga ducimus numquam ea!
    //       </p>

    //       <div class="mt-8 flex flex-wrap gap-4 text-center">
    //         <a
    //           href="#"
    //           class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
    //         >
    //           Get Started
    //         </a>

    //         <a
    //           href="#"
    //           class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
    //         >
    //           Learn More
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Homepage;
