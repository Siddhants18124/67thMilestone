import React from "react";
import {
  EducateImg,
  HeroChlng,
  ParllaxImg,
  MileStone,
  day1,
  day2,
  day3,
  HomeCard1,
  HomeCard2,
  dj,
  sukhe,
  aseem
} from "../assets";
import EventsPageGrid from "./EventsPageGrid";
import ExploreCard from "./ExploreCard";
import Image from "next/image";

function Content() {
  return (
    <section className="min-h-screen">
      <div
        id="deepdive"
        data-aos="fade-up"
        data-aos-duration="1000"
        className="my-8 min-h-screen"
      >
        <div className="text-center mx-4 text-white xl:mt-16 mb-5 xl:mb-6 mt-10">
          <h1 className="xl:text-4xl text-2xl my-16">
            LET US TAKE A DEEP DIVE IN THE
          </h1>
        </div>
        <div className="w-[80vw] mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  lg:gap-3">
            <EventsPageGrid
              url="/events/67thmilestone"
              logo={MileStone}
              bg={HomeCard1}
            />
            <EventsPageGrid
              url="/events/heros-challenge"
              logo={HeroChlng}
              bg={HomeCard2}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-3 lg:gap-3">
            <ExploreCard image={sukhe} text="Star Night" />
            <ExploreCard image={aseem} text="Star Night" />
            <ExploreCard image={dj} text="Star Night" />
          </div>
        </div>
      </div>
      <div className="text-['Poppins'] mt-16" data-aos="fade-up">
        <p className="text-center text-7xl uppercase text-transparent social font-bold">
          Social Cause
        </p>
        <div className="flex flex-row flex-wrap-reverse w-[80vw] gap-8 justify-center items-start mx-auto my-8 text-white">
          <Image
            src={ParllaxImg}
            alt="Parallax Image"
            width={600}
            height={300}
            className="object-cover w-[28vw] min-w-[17rem] flex-grow"
          />
          <div className="flex flex-col sm:flex-grow gap-4 w-[25vw] h-full justify-center items-center min-w-[17rem] ">
            <Image
              src={EducateImg}
              width={500}
              height={200}
              alt="educate Logo"
              className="object-cover w-full max-w-[30rem] my-8"
            />
            <p className="max-w-[30rem] w-full text-left text-white leading-relaxed font-[1.15rem]">
              At BMU, in our unwavering commitment to theme:Enthusiasmo -
              Embrace Openness, Ignite Happiness we are thrilled to announce our
              dedicated support for the profound social cause of Openness. This
              cause encapsulates the very essence of happiness.
            </p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/13Y67o2gCwTncargWqmLVQvnUPhc9TXQV/view"
          className="flex w-fit mt-16 cursor-pointer transition-all duration-700 hover:bg-white hover:text-black mx-auto justify-center items-center border-white border-2 px-16 py-4 text-white font-[1.1rem]"
        >
          <p className="m-0">Sponsor Us</p>
        </a>
      </div>
    </section>
  );
}

export default Content;
