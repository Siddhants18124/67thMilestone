import Content from "./Content";
import HeroSection from "./HeroSection";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <Analytics/>
      <HeroSection />
      <Content />
    </>
  );
}
