// "use client";

// import NoteCard from "./noteCard";
// import { today } from "./data";

// export default function TodayCard() {
//   return (
//     <div
//       className="
//         rounded-[28px]
//         border
//         border-black/5
//         bg-[#FEF3C7]/55
//         p-6
//         shadow-[0_20px_60px_rgba(0,0,0,.05)]
//         backdrop-blur-sm
//         sm:p-7
//       "
//     >
//       <p
//         className="
//           font-['IBM_Plex_Mono']
//           text-[11px]
//           uppercase
//           tracking-[0.18em]
//           text-neutral-500
//         "
//       >
//         Right Now
//       </p>

//       <h2
//         className="
//           mt-2
//           font-['EB_Garamond']
//           text-4xl
//           text-[#1A1C1B]
//           sm:text-5xl
//         "
//       >
//         Today
//       </h2>

//       <div className="mt-5 space-y-3">
//         {today.map((item) => (
//           <NoteCard
//             key={item.label}
//             label={item.label}
//             title={item.title}

//           />
//         ))}
//       </div>
//     </div>
//   );
// }