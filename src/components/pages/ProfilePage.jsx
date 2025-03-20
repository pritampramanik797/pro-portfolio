// "use client";
// import React from "react";
// import ProfileSidebar from "./ProfileSidebar";
// import ProfileContent from "./ProfileContent";

// function ProfilePage() {
//   return (
//     <main className="flex justify-center p-8 bg-neutral-100 min-h-screen ">
//       <div className="flex flex-col gap-10 items-center  w-full max-w-[1200px] max-md:px-5 max-sm:px-2.5">
//         <section className="flex justify-center   w-full max-w-[1200px] max-md:flex-col">
//         <div className="hidden sm:block sm:sticky sm:top-[30px] h-screen w-1/4">
//   <ProfileSidebar />
// </div>
// <div className="sm:hidden block">
//   <ProfileSidebar />
// </div>


//           <div className="sm:max-w-[40%] sm:ml-[-40px]">
//           <ProfileContent />

//           </div>
        
//         </section>
//       </div>
//     </main>
//   );
// }

// export default ProfilePage;
"use client";
import React, { useRef } from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";

function ProfilePage() {
  const scrollToContact = useRef(null);  // Create the ref

  return (
    <main className="flex justify-center p-8 bg-neutral-100 min-h-screen">
      <div className="flex flex-col gap-10 items-center w-full max-w-[1200px] max-md:px-5 max-sm:px-2.5">
        <section className="flex justify-center w-full max-w-[1200px] max-md:flex-col">
          
          {/* Sidebar */}
          <div className="hidden sm:block sm:sticky sm:top-[30px] h-screen w-1/4">
            <ProfileSidebar scrollToContact={scrollToContact} />
          </div>

          <div className="sm:hidden block">
            <ProfileSidebar scrollToContact={scrollToContact} />
          </div>

          {/* Main Content */}
          <div className="sm:max-w-[40%] sm:ml-[-40px]">
            <ProfileContent scrollToContact={scrollToContact} />
          </div>

        </section>
      </div>
    </main>
  );
}

export default ProfilePage;

