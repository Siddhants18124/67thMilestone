import Image from "next/image";
import hero from "../../assets/sponcers/hero.png";
import Link from "next/link";
import { hero2,hero3, hero4, hero5, hero6 } from "@/assets";

function Sponsors() {
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
            <div>
              <h1 className="justify-center text-center text-white font-bold text-3xl mb-6">
                Presented By
              </h1>
              <div className="flex flex-wrap w-[80vw] mx-auto justify-between gap-12 items-center max-w-[80%] overflow-hidden">
                <div className="min-w-[15rem] relative flex-grow flex flex-col items-center gap-3 h-[17rem] ">
                  <Link
                    href="https://www.heromotocorp.com/en-in.html"
                    target="_blank"
                  >
                    <Image
                      className="absolute lg:top-[7rem] md:top-[6rem] sm:top-[5rem] top-[5rem] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[100%]"
                      src={hero}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="min-w-[15rem] relative flex-grow flex flex-col items-center gap-3 h-[10rem]">
                  <Link
                    href="https://www.heromotocorp.com/en-in.html"
                    target="_blank"
                  >
                    <Image
                      className="absolute lg:top-[7rem] md:top-[6rem] sm:top-[5rem] top-[5rem] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[70%]"
                      src={hero2}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <h1 className="justify-center text-center text-white font-bold text-3xl mb-6">
            Powered By
          </h1>
          <div className="w-full max-w-xs m-auto mt-14 overflow-hidden">
            <Link href="https://www.herofutureenergies.com/" target="_blank">
              <Image
                className="object-cover w-full h-56"
                src={hero3}
                alt="avatar"
              />
            </Link>
          </div>
        </div>

        <section>
          <div className="mx-auto m-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-screen-xl mx-auto">
              <h1 className="justify-center text-center text-white font-bold text-3xl mt-10 mb-6">
                Associate Sponsor
              </h1>
              <div className="flex flex-wrap w-[80vw] mx-auto justify-between gap-4 items-center max-w-[100%] overflow-hidden">
                <div className="min-w-[15rem] relative flex-grow flex flex-col items-center gap-3 h-[17rem]">
                  <Link href="https://www.easemytrip.com/" target="_blank">
                    <Image
                      className="absolute lg:top-[9rem] lg:mr-8 md:top-[6rem] top-[5rem] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[80%]"
                      src={hero6}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="min-w-[15rem] relative flex-grow flex flex-col items-center gap-3 h-[17rem]">
                  <Link href="https://www.icicibank.com/" target="_blank">
                    <Image
                      className="absolute lg:top-[7rem] md:top-[6rem] sm:top-[5rem] top-[5rem] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[80%]"
                      src={hero4}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="min-w-[15rem] relative flex-grow flex flex-col items-center gap-3 h-[17rem]">
                  <Link href="https://www.rockman.in/" target="_blank">
                    <Image
                      className="absolute lg:top-[7rem] md:top-[6rem] sm:top-[5rem] top-[5rem] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[70%]"
                      src={hero5}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

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
