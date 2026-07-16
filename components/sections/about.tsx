// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// export default function AboutSection() {
//   return (
//     <section className="px-6 py-28 lg:px-10">
//       <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
//         {/* Image */}
//         <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md">
//           <Image
//             src="/images/pearl.jpg"
//             alt="Pearl"
//             width={700}
//             height={700}
//             className="aspect-square h-full w-full object-cover"
//           />

//           {/* Bottom Stats */}
//           <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-10 border-t border-white/10 bg-black/40 px-8 py-7 backdrop-blur-xl">
//             <div className="text-center">
//               <p className="text-4xl font-bold text-[#F1B5D5]">18+</p>
//               <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#D3C2C9]">
//                 Projects
//               </p>
//             </div>

//             <div className="h-12 w-px bg-white/10" />

//             <div className="text-center">
//               <p className="text-4xl font-bold text-[#F1B5D5]">2+</p>
//               <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#D3C2C9]">
//                 Years
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div>
//           <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#F1B5D5]">
//             About
//           </p>

//           <h2 className="mt-6 text-5xl font-bold leading-none tracking-tight text-[#EAE0E2] md:text-6xl">
//             Code as Craft.
//             <br />
//             Design as Intent.
//           </h2>

//           <div className="mt-10 space-y-6 text-lg leading-8 text-[#D3C2C9]">
//             <p>
//               I approach every project with a product-first mindset. My goal
//               isn't just to write code, but to solve real problems through
//               thoughtful engineering, intentional design and seamless user
//               experiences.
//             </p>

//             <p>
//               I enjoy building products that feel elegant beneath the surface.
//               From frontend interactions to backend architecture, I care about
//               creating software that's as enjoyable to maintain as it is to use.
//             </p>
//           </div>

//           <button className="group mt-12 flex items-center gap-4 font-semibold text-[#F1B5D5] transition-colors hover:text-white">
//             Read My Story

//             <ArrowRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Image Card */}
        <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-[#F1B5D5]/20 hover:shadow-[0_32px_80px_rgba(241,181,213,0.18)]">
          {/* Ambient Glow */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F1B5D5]/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]">
            <Image
              src="/images/pearl.jpg"
              alt="Pearl"
              width={700}
              height={700}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Stats */}
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-center gap-5 border-t border-white/10 bg-black/45 px-6 py-6 backdrop-blur-xl transition-all duration-500 group-hover:bg-black/60 sm:gap-8 sm:px-8 sm:py-7">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F1B5D5]">18</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#D3C2C9]">
                Projects Built
              </p>
            </div>

            <div className="hidden sm:block h-12 w-px bg-white/10" />

            <div className="text-center">
              <p className="text-4xl font-bold text-[#F1B5D5]">2+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#D3C2C9]">
                Years Learning
              </p>
            </div>

            <div className="hidden sm:block h-12 w-px bg-white/10" />

            <div className="text-center">
              <p className="text-4xl font-bold text-[#F1B5D5]">∞</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#D3C2C9]">
                Curiosity
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="group">
          {/* Section Label */}
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-[#F1B5D5]" />

            <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#F1B5D5]">
              About
            </p>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#EAE0E2] transition-colors duration-500 group-hover:text-white md:text-5xl lg:text-6xl">
            <span className="block transition-transform duration-500 group-hover:-translate-y-1">
              Code as Craft.
            </span>

            <span className="block transition-transform duration-500 group-hover:translate-y-1">
              Design as Intent.
            </span>
          </h2>

          {/* Body */}
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-7 text-[#C8C5CA] transition-colors duration-500 group-hover:text-[#E0D6DA] md:text-lg md:leading-8">
            <p>
              I approach every project with a product-first mindset. My goal
              isn't just to write code, but to solve real problems through
              thoughtful engineering, intentional design, and seamless user
              experiences.
            </p>

            <p>
              I enjoy building products that feel elegant beneath the surface.
              From frontend interactions to backend architecture, I care about
              creating software that's as enjoyable to maintain as it is to
              use.
            </p>
          </div>

          {/* CTA */}
          <button
            className="
              group/btn
              mt-12
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              px-6
              py-3
              font-semibold
              text-[#F1B5D5]
              transition-all
              duration-500
              hover:border-[#F1B5D5]/30
              hover:bg-white/[0.05]
              hover:shadow-[0_0_30px_rgba(241,181,213,0.12)]
            "
          >
            Read My Story

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}