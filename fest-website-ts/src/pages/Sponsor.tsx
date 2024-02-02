import AOS from "aos";
import { useEffect } from "react";
import { HeroChlng, MileStone } from "../assets";

const Sponsors = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="main-bg">
      <div>
        <section>
          <div className="pt-20 pb-10 mx-auto ">
            <div className="m-auto w-[80vw] pt-12 pb-24">
              <p className="mx-auto mt-4 leading-relaxed max-w-[1000px] font-['Poppins'] text-white text-justify text-lg lg:text-xl xl:text-2xl">
                Over the past years 67th Milestone And Hero’s challenge has had
                the privilege to have hosted a number of sponsors which provided
                a very entertaining experience to our visitors as well as the
                brand. The crowd engagement, media exposure, sampling and brand
                building opportunities offered at 67th Milestone And Hero’s
                challenge are unparalleled.
              </p>
            </div>
            <div className="flex flex-wrap w-[80vw] mx-auto justify-between gap-4 items-center max-w-[100%] overflow-hidden">
              <div className="min-w-[15rem] relative flex-grow flex flex-col items-center gap-3 h-[17rem]">
                <div className="flex flex-row justify-between gap-8 text-white">
                  <p>Presents</p>
                  <p>In association with</p>
                </div>
                <img
                  className="absolute lg:top-[7rem] md:top-[6rem] top-[5rem] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[100%]"
                  src={MileStone}
                  alt=""
                />
              </div>
              <div className="min-w-[15rem] relative flex-grow flex flex-col items-center gap-3 h-[17rem]">
                <div className="flex flex-row gap-8 justify-between text-white">
                  <p>Sponsored by</p>
                  <p>In association with</p>
                </div>
                <img
                  className="absolute lg:top-[7rem] md:top-[6rem] sm:top-[5rem] top-[5rem] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[100%]"
                  src={HeroChlng}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full max-w-xs m-auto mt-14 overflow-hidden">
          <img
            className="object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />

          <div className="py-5 text-center text-white">
            <a href="#" className="block text-3xl  font-bold text-white-700">
              Sponsor Name
            </a>
            <span className="tracking-wider text-l text-white-900">
              Sponsor Level
            </span>
          </div>
        </div>

        <section>
          <div className="mx-auto m-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Sponsor />
              <Sponsor />
              <Sponsor />
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <div className="mx-auto m-auto max-w-screen-xl px-4  sm:px-6  lg:px-8">
            <h1 className="text-center text-3xl font-bold text-white">
              Partners
            </h1>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Sponsor />
              <Sponsor />
              <Sponsor />
              <Sponsor />
              <Sponsor />
              <Sponsor />
              <Sponsor />
              <Sponsor />
              <Sponsor />
              <Sponsor />
              <Sponsor />
              <Sponsor />
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

const Sponsor = () => {
  return (
    <li className="m-2">
      <a href="#" className="group block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          className="object-cover w-full h-56"
        />

        <div className="relative bg-transparent text-white pt-3 text-center">
          <h3 className="text-3xl text-white-700 font-bold">Sponsor Name</h3>

          <p className="mt-2">
            <span className="tracking-wider text-l text-white-900">
              {" "}
              Sponsor Level{" "}
            </span>
          </p>
        </div>
      </a>
    </li>
  );
};

export default Sponsors;
