import React from "react";
// import "./homesection4.css";
import educatelogo from "../../assets/educate.png";

const Homesection4 = () => {
  return (
    // <div className="section4container">
    //   <div className="educateinfo">
    //     <div className="imgcont">
    // <img src={educatelogo} alt="" className='educatelogo' />
    //     </div>
    //     <div className='educatetext'>
    // <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores molestiae nobis nesciunt rerum soluta? Fugiat deserunt necessitatibus </p>
    //     </div>
    // <div className="btncont">
    //   <div className='btnholder'>
    //     <a className='btncontr' href="#">Contribute</a>
    //   </div>
    // </div>
    //   </div>
    // </div>
    <div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-28 xl:mx-28 md:mx-24 mx-10">
        <div class="h-auto rounded-lg ">
          <img src={educatelogo} alt="" className="xl:w-10/12 w-full" />
        </div>
        <div class="h-auto rounded-lg xl:mx-16 ">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            asperiores molestiae nobis nesciunt rerum soluta? Fugiat deserunt
            necessitatibus{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5 ">
        <div className=" border-black xl:border-2 border-4 ">
          <a className="mx-8 my-8" href="#">
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homesection4;
