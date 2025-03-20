// import React from "react";
// import AvailabilityBadge from "./AvailabilityBadge";
// import ContactInfo from "./ContactInfo";

// function ProfileSidebar({ scrollToContact }) {
//   return (
//     <aside className="w-56 max-md:w-full ">
//       <div className="p-2.5 bg-white rounded-lg shadow-sm">
//         <div className="flex flex-col items-center ">
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e816d329f777a3186f69989aa206a96733023a"
//             alt="Profile"
//             className="w-full max-w-[180px] h-[194px] rounded-[8px] mb-[20px]"
//           />
//           <h1 className="mb-2.5 text-2xl font-medium">Hello I'm Alex Morgan</h1>
//           <p className="mb-2.5 text-sm text-black text-opacity-70">
//             Web Designer, Content Creator &amp; writer.
//           </p>
//           <div className="w-full">
//           <AvailabilityBadge />
//           <div className="flex gap-1 items-center text-xs text-black text-opacity-70">
//             <LocationIcon />
//             <span>Berlin, Germany</span>
//           </div>
//           </div>
          
//         </div>
//       </div>
//       <ContactInfo scrollToContac={scrollToContact} />
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

function ProfileSidebar({ scrollToContact }) {
  return (
    <aside className="w-56 max-md:w-full">
      <div className="p-2.5 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e816d329f777a3186f69989aa206a96733023a"
            alt="Profile"
            className="w-full max-w-[180px] h-[194px] rounded-[8px] mb-[20px]"
          />
          <h1 className="mb-2.5 text-2xl font-medium">Hello I'm Alex Morgan</h1>
          <p className="mb-2.5 text-sm text-black text-opacity-70">
            Web Designer, Content Creator &amp; writer.
          </p>
          <div className="w-full">
            <AvailabilityBadge />
            <div className="flex gap-1 items-center text-xs text-black text-opacity-70">
              <LocationIcon />
              <span>Berlin, Germany</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pass ref to ContactInfo */}
      <ContactInfo scrollToContact={scrollToContact} />
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
