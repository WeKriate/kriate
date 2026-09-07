import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeCreate from "@/components/WhatWeCreate";
import TheDifference from "@/components/TheDifference";
import Work from "@/components/Work";
import HowWeThink from "@/components/HowWeThink";
import BigStatement from "@/components/BigStatement";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import Transition from "@/components/Transition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhoWeAre />
        <WhatWeCreate />
        <TheDifference />
        <Work />
        <HowWeThink />
        <BigStatement />
        <WhatWeBelieve />
        <Transition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
