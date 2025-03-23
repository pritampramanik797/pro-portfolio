


// import React from "react";
// import AvailabilityBadge from "./AvailabilityBadge";
// import ContactInfo from "./ContactInfo";
// import mainImg from '../../video/mainImg.png'

// function ProfileSidebar({ scrollToContact ,scrollToProjects}) {
//   return (
//     <aside className="w-52 max-md:w-full">
//       <div className="p-2.5 bg-white rounded-lg shadow-sm">

//         {/* Wrapper for small screen layout */}
//         <div className="flex flex-col max-md:flex-row max-md:items-center max-md:gap-4">
          
//           {/* Image */}
//           <div className="max-w-[180px] mb-[20px] rounded-lg overflow-hidden max-md:mb-0">
//             <img
//               src={mainImg}
//               alt="Profile"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           {/* Title and Description */}
//           <div className="flex-1">
//             <h1
//               className="mb-2 text-[22px] leading-[26px] font-normal"
//               style={{
//                 fontFamily: "'Inter', sans-serif",
//                 background: "linear-gradient(90deg, #000, #555)",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent"
//               }}
//             >
//               Hello I’m <br />
//               <span
//                 className="font-semibold"
//                 style={{
//                   background: "linear-gradient(90deg, #333, #555)",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent"
//                 }}
//               >
//                 Pritam Pramanik
//               </span>
//             </h1>

//             <p className="mb-2.5 text-sm text-black text-opacity-70">
//               Visual storyteller aka <br /> Video Editor.
//             </p>
//           </div>
//         </div>

//         {/* Availability and Location */}
//         <div className="w-full mt-4">
//           <AvailabilityBadge />
//           <div className="flex gap-1 items-center text-xs text-black text-opacity-70">
//             <LocationIcon />
//             <span>Kolkata, West Bengal</span>
//           </div>
//         </div>

//       </div>

//       {/* Pass ref to ContactInfo */}
//       <ContactInfo scrollToContact={scrollToContact} scrollToProjects={scrollToProjects}/>
//     </aside>
//   );
// }

// function LocationIcon() {
//   return (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 14 14"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-[14px] h-[14px]"
//     >
//       <path
//         d="M7 7.5C7.55228 7.5 8 7.05228 8 6.5C8 5.94772 7.55228 5.5 7 5.5C6.44772 5.5 6 5.94772 6 6.5C6 7.05228 6.44772 7.5 7 7.5Z"
//         fill="currentColor"
//       />
//       <path
//         d="M7 1C4.23858 1 2 3.23858 2 6C2 8.76142 7 13 7 13C7 13 12 8.76142 12 6C12 3.23858 9.76142 1 7 1ZM7 8.5C5.89543 8.5 5 7.60457 5 6.5C5 5.39543 5.89543 4.5 7 4.5C8.10457 4.5 9 5.39543 9 6.5C9 7.60457 8.10457 8.5 7 8.5Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

// export default ProfileSidebar;


import React from "react";
import AvailabilityBadge from "./AvailabilityBadge";
import ContactInfo from "./ContactInfo";
import mainImg from '../../video/mainImg.png'

function ProfileSidebar({ scrollToContact, scrollToProjects }) {
  return (
    <aside className="w-52 max-md:w-full">
      <div className="p-2.5 bg-white rounded-lg shadow-sm">

        {/* Wrapper for small screen layout */}
        <div className="flex flex-col max-md:flex-row max-md:items-center max-md:gap-4">
          
          {/* Image */}
          <div className="max-w-[180px] mb-[20px]  rounded-lg overflow-hidden max-md:mb-0 max-md:max-w-[120px]"> 
            {/* Decreased image size on smaller screens */}
            <img
              src={mainImg}
              alt="Profile"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title and Description */}
          <div className="flex-1">
            <h1
              className="mb-2 text-[22px] leading-[26px] font-normal"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "linear-gradient(90deg, #000, #555)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Hello I’m <br />
              <span
                className="font-semibold"
                style={{
                  background: "linear-gradient(90deg, #333, #555)",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
              >
                Pritam Pramanik
              </span>
            </h1>

            <p className="mb-2.5 text-sm text-black text-opacity-70">
              Visual storyteller aka <br /> Video Editor.
            </p>
          </div>
        </div>

        {/* Availability and Location */}
        <div className="w-full mt-4">
          <AvailabilityBadge />
          <div className="flex gap-1 items-center text-xs text-black text-opacity-70">
            <LocationIcon />
            <span>Kolkata, West Bengal</span>
          </div>
        </div>

      </div>

      {/* Pass ref to ContactInfo */}
      <ContactInfo scrollToContact={scrollToContact} scrollToProjects={scrollToProjects} />
    </aside>
  );
}

function LocationIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[14px] h-[14px]"
    >
      <path
        d="M7 7.5C7.55228 7.5 8 7.05228 8 6.5C8 5.94772 7.55228 5.5 7 5.5C6.44772 5.5 6 5.94772 6 6.5C6 7.05228 6.44772 7.5 7 7.5Z"
        fill="currentColor"
      />
      <path
        d="M7 1C4.23858 1 2 3.23858 2 6C2 8.76142 7 13 7 13C7 13 12 8.76142 12 6C12 3.23858 9.76142 1 7 1ZM7 8.5C5.89543 8.5 5 7.60457 5 6.5C5 5.39543 5.89543 4.5 7 4.5C8.10457 4.5 9 5.39543 9 6.5C9 7.60457 8.10457 8.5 7 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ProfileSidebar;
