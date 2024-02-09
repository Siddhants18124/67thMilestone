import "./about2.css";
import { HeroChlng, HomeCard1, HomeCard2, MileStone } from "../../assets";
import Image from "next/image";

const About2 = () => {
  return (
    <div
      className="flex justify-center pt-[8rem] mx-2 md:mx-6 md:py-4 box-border min-h-[100vh]  text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="grid md:w-[73vw] w-[80vw] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="grid grid-cols-1 gap-3 lg:grid-row-2">
          <div className="h-full min-h-[15rem] md:min-h-[20rem] relative max-h-[20rem] rounded-lg flex justify-end">
            <Image
              src={HomeCard1}
              alt="alt image"
              width={500}
              height={320}
              className="absolute top-0 z-10 left-0 h-full w-full max-w-[600px] object-cover opacity-80 "
            />
            <Image
              src={MileStone}
              alt="miltstone img"
              width={500}
              height={320}
              className="absolute object-contain scale-75 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-100"
            />
          </div>
          <div className="h-full min-h-[15rem] md:min-h-[20rem] relative max-h-[20rem] rounded-lg flex justify-end">
            <Image
              src={HomeCard2}
              alt="alt image"
              width={500}
              height={320}
              className="absolute z-10 top-0 left-0 h-full w-full max-w-[600px] object-cover opacity-80 "
            />
            <Image
              src={HeroChlng}
              className="absolute object-contain scale-75 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-100"
              width={500}
              height={320}
              alt="alt image"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="row-span-full py-4 md:px-4 sm:px-4 lg:px-8 flex flex-col items-center">
            <h1 className="text-white font-extrabold text-5xl mt-2 mb-8">
              About Fest
            </h1>
            <p className="text-white flex-grow font-[20px] text-justify leading-[36px] font-['Poppins']">
              BML Munjal University, founded by The Hero Group, is acclaimed for
              academic excellence and innovative learning. Recognized as a
              top-notch budding university by former President Shri Pranab
              Mukherjee in 2017, it has valuable associations with institutions
              like the London School of Economics. Partnerships with
              corporations like Hero MotoCorp, IBM, Siemens, KPMG and others
              create a sustainable college environment. With an emphasis on
              developing moral leaders with critical life skills, BMU has
              achieved many milestones and laurels in academics, athletics, and
              research conferences.
              <br /> Our campus is a vibrant, multicultural institution with
              students from various parts of the country. It emphasizes on
              holistic development, fostering personalities to explore their
              full potential apart from scholastic brilliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
