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
      <div className="flex justify-center py-24">
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
        </div>
      </div>

      {/* <div className="poccont">
        <div className="eventcont">
          <h1>Event</h1>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="poc">
          <h1>Person of Contact</h1>
          <div className="pocimgcont">
            <img srcSet={poc1} alt="" className="pocimg1" />
            <img srcSet={poc2} alt="" className="pocimg1" />
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default Register;
