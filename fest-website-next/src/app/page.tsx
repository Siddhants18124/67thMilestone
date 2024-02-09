import NextText from "@/components/NextText";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="">
      <section className="h-screen relative z-20">
        <div className="-z-10 absolute h-full w-full bg-black opacity-40" />
        <NextText />
        <video
          src="/video/bla_bg.mp4"
          // src={video}
          autoPlay
          muted
          loop
          controls={false}
          playsInline
          className="absolute h-full w-full object-cover -z-20"
        ></video>
        <section className="relative h-full w-full p-4 pt-32 text-white flex flex-col justify-between lg:w-11/12 lg:mx-auto">
          <div />
          <div>
            <h1 className="text-3xl mobile_m:text-5xl mobile_s:text-4xl mobile_l:text-6xl sm:text-7xl font-bold tracking-wider">
              <div className="mb-4">67th Milestone</div>
              <div>Hero’s Challenge</div>
            </h1>
            <div className="mt-8 bg-white h-20 w-20 sm:h-32 sm:w-32 flex flex-col uppercase font-bold text-xl sm:text-3xl justify-center items-center px-2 gap-2">
              <h2 className="mix-blend-difference text-center">01-03</h2>
              <div className="h-[2px] w-full bg-black"></div>
              <h2 className="mix-blend-difference text-center">MAR</h2>
            </div>
          </div>
          <Link
            href={"https://maps.app.goo.gl/k8dmbFxLpQkFm11F8"}
            className="text-lg flex flex-row items-center gap-1 sm:text-2xl mb-4"
          >
            <IoLocationOutline className="" />
            <span className="text-lg font-light">
              BML Munjal University, NH 48
            </span>
            <span className="hidden">, Kapriwas, Haryana 122413</span>
          </Link>
        </section>
      </section>
    </main>
  );
}
