"use client";

import Announcement from "./announcement";
import HeroButtons from "./heroButtons";
import TechStack from "./techstack";
import CurrentlyCard from "./Currentlycard";
// import WritingCard from "./writingCard";
import BackgroundBlobs from "./backgroundBlobs";
// import ProfileCard from "./profileCard";
import IdentityCard from "./profileCard";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-36 lg:px-10">
      {/* Background */}
      <BackgroundBlobs />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
        {/* LEFT */}
        <div className="relative z-10 flex min-h-[600px] flex-col justify-center">
          <Announcement />

          <h1 className="mt-10 text-6xl font-extrabold leading-none tracking-[-0.06em] md:text-7xl lg:text-8xl">
            <span className="block text-[#EAE0E2]">
              Hi, I'm
            </span>

            <span className="block bg-gradient-to-r from-[#F1B5D5] via-[#FFE7F2] to-[#F1B5D5] bg-clip-text text-transparent">
              Pearl.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#D3C2C9] md:text-2xl">
            Curious about how systems work, passionate about building products that do.
          </p>

          <div className="mt-12">
            <HeroButtons />
          </div>

          <div className="mt-12">
            <TechStack />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full">
          <div className="grid gap-6">
            <CurrentlyCard />

            <div className="grid gap-6">
              <IdentityCard />
              {/* <WritingCard /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
