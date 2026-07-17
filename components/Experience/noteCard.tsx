// "use client";

// import MaskingTape from "./maskingTape";

// interface NoteCardProps {
//   label: string;
//   title: string;

// }

// export default function NoteCard({
//   label,
//   title,

// }: NoteCardProps) {
//   return (
//     <div
//       className="
//         group
//         relative
//         overflow-visible
//         rounded-[18px]
//         border
//         border-[#E9DFC4]
//         bg-[#FFFDF8]
//         px-5
//         py-4
//         shadow-[0_8px_22px_rgba(0,0,0,.045)]
//         transition-all
//         duration-500
//         hover:-translate-y-1
//         hover:rotate-[0.35deg]
//         hover:shadow-[0_18px_40px_rgba(0,0,0,.08)]
//       "
//     >
//       <MaskingTape
//         className="-right-2 -top-2"
//         rotate="8deg"
//       />

//       <p
//         className="
//           font-['IBM_Plex_Mono']
//           text-[10px]
//           uppercase
//           tracking-[0.18em]
//           text-neutral-500
//         "
//       >
//         {label}
//       </p>

//       <h3
//         className="
//           mt-2
//           pr-6
//           font-['EB_Garamond']
//           text-[1.55rem]
//           leading-tight
//           text-[#1A1C1B]
//           transition-transform
//           duration-300
//           group-hover:translate-x-1
//         "
//       >
//         {title}
//       </h3>

//       <p
//         className="
//           mt-1.5
//           text-sm
//           leading-6
//           text-neutral-600
//         "
//       >

//       </p>
//     </div>
//   );
// }