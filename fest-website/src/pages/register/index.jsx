import React from "react";
import "./poc.css";
import poc1 from "../../assets/poc1.png";
import poc2 from "../../assets/poc2.png";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Register() {
  return (
    <div className="main-bg register">
      <Navbar black={true} />
      <div className="flex justify-center pt-24">
        <div className="p-8 w-fit bg-[#ffffff19] text-white rounded-xl">
          <div className="flex flex-wrap justify-center gap-8 w-[80vw]">
            <img
              src={poc2}
              className="lg:w-[25rem] min-w-[15rem] max-w-[25rem] w-10vw rounded-xl flex-grow-0"
            />
            <div className="flex flex-col gap-4 w-[30rem] flex-grow">
              <p className="text-[2rem] br">Event Name</p>
              <p className="text-[1.15rem] leading-relaxed">
                Mauris nunc, dolor augue etiam in. Amet dolor etiam amet, felis
                commodo. Proin mauris sem varius sit viverra ultrices fusce
                etiam aliquet Mauris nunc, dolor augue etiam in. Amet dolor
                etiam amet, felis commodo. Proin mauris sem varius sit viverra
                ultrices fusce etiam aliquet.
              </p>
              <p className="text-[2rem]">Rules</p>
              <ol className="list-decimal list-inside flex flex-col gap-2">
                <li>
                  Mauris nunc, dolor augue etiam in. Amet dolor etiam amet,
                </li>
                <li>
                  Mauris nunc, dolor augue etiam in. Amet dolor etiam amet,
                </li>
                <li>
                  Mauris nunc, dolor augue etiam in. Amet dolor etiam amet,
                </li>
                <li>
                  Mauris nunc, dolor augue etiam in. Amet dolor etiam amet,
                </li>
                <li>
                  Mauris nunc, dolor augue etiam in. Amet dolor etiam amet,
                </li>
              </ol>
              <button className="bg-transparent border-4 border-white w-fit px-16 my-4 py-4">
                Register
              </button>
            </div>
          </div>
          <p className="text-[2rem] my-16 text-center">Person Of Contact</p>
          <div className="flex flex-wrap gap-16 justify-center">
            <div className="flex gap-8">
              <img src={poc1} className="w-[15rem] rounded-xl" alt="" />
              <div className="flex flex-col gap-3 text-[1.15rem] w-[10rem]">
                <p>Contact Name 1</p>
                <p>Position</p>
                <p>Contact</p>
                <p>Mail ID</p>
              </div>
            </div>
            <div className="flex gap-8">
              <img src={poc2} className="w-[15rem] rounded-xl" alt="" />
              <div className="flex flex-col gap-3 text-[1.15rem] w-[10rem]">
                <p>Contact Name 2</p>
                <p>Position</p>
                <p>Contact</p>
                <p>Mail ID</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
