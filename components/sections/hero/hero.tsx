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
    <section className="relative overflow-hidden px-6 pt-36 pb-24 lg:px-10">
      {/* Background */}
      <BackgroundBlobs />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
        {/* LEFT */}
        <div className="relative z-10 flex min-h-[600px] flex-col justify-center">
          <Announcement />

          <h1 className="mt-10 max-w-xl text-6xl font-extrabold leading-none tracking-[-0.06em] text-[#EAE0E2] md:text-7xl lg:text-8xl">
            Hi, I'm Pearl.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#D3C2C9] md:text-2xl">
            Software Engineer building thoughtful software that simplifies
            complex workflows and creates intuitive digital experiences.
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