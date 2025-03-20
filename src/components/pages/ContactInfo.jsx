// import React from "react";

// function ContactInfo() {
//   return (
//     <div className="p-2.5 mt-2.5 bg-white rounded-lg shadow-sm">
//       <div className="flex flex-col gap-3">
//         <ContactItem icon={<WebsiteIcon />} text="InstantDesign.com" />
//         <ContactItem icon={<PhoneIcon />} text="1356-77882-0082" />
//         <ContactItem icon={<EmailIcon />} text="Instantcraft@Studio.in" />
//       </div>
//       <div className="flex flex-col gap-2.5 mt-5">
//         {/* <button className="py-3 w-full text-xs font-medium rounded-lg border border-black border-opacity-10">
//           Download CV
//         </button> */}
//         <button className="py-3 w-full text-xs font-medium text-white rounded-lg bg-black bg-opacity-80">
//           Contact Me
//         </button>
//       </div>
//     </div>
//   );
// }

// function ContactItem({ icon, text }) {
//   return (
//     <div className="flex gap-1.5 items-center">
//       {icon}
//       <span className="text-xs text-black text-opacity-70">{text}</span>
//     </div>
//   );
// }

// function WebsiteIcon() {
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
//         d="M7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1ZM2 7C2 6.40666 2.10893 5.83974 2.30491 5.31555C2.48842 5.72449 2.74202 6.10241 3.20497 6.10241C3.86133 6.10241 4.1443 5.54945 4.44367 4.95818C4.74304 4.36691 5.04241 3.77563 5.69877 3.77563C6.35513 3.77563 6.6545 4.32859 6.95387 4.91986C7.25324 5.51114 7.55261 6.10241 8.20897 6.10241C8.86533 6.10241 9.1647 5.54945 9.46407 4.95818C9.76344 4.36691 10.0628 3.77563 10.7192 3.77563C11.1821 3.77563 11.4357 4.15355 11.6192 4.56249C11.8152 5.08668 11.9241 5.6536 11.9241 6.24694C11.9241 9.43451 9.73451 12 6.54694 12C3.35938 12 2 9.43451 2 7Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

// function PhoneIcon() {
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
//         d="M12.25 9.39C11.41 9.39 10.59 9.25 9.82 8.98C9.66 8.93 9.49 8.95 9.35 9.04L8.01 10.07C6.45 9.27 5.04 7.88 4.22 6.29L5.24 4.95C5.34 4.81 5.36 4.64 5.31 4.48C5.04 3.71 4.9 2.89 4.9 2.05C4.9 1.8 4.7 1.6 4.45 1.6H2.25C2 1.6 1.75 1.8 1.75 2.05C1.75 7.94 6.61 12.8 12.5 12.8C12.75 12.8 12.95 12.6 12.95 12.35V10.15C12.95 9.9 12.75 9.7 12.5 9.7C12.41 9.39 12.34 9.39 12.25 9.39Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

// function EmailIcon() {
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
//         d="M11.6667 2.33337H2.33333C1.59695 2.33337 1 2.93033 1 3.66671V10.3334C1 11.0698 1.59695 11.6667 2.33333 11.6667H11.6667C12.403 11.6667 13 11.0698 13 10.3334V3.66671C13 2.93033 12.403 2.33337 11.6667 2.33337Z"
//         stroke="currentColor"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M1 3.66663L7 7.66663L13 3.66663"
//         stroke="currentColor"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// export default ContactInfo;


import React from "react";

function ContactInfo({ scrollToContact }) {
  const handleContactClick = () => {
    if (scrollToContact?.current) {
      console.log("clicked");
      scrollToContact.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-2.5 mt-2.5 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col gap-3">
        {/* <ContactItem icon={<LinkedInIcon />} text="pritam-pramanik-video-editor" link="https://www.linkedin.com/in/pritam-pramanik-video-editor/"/> */}
        {/* <ContactItem icon={<PhoneIcon />} text="1356-77882-0082" /> */}
        {/* <ContactItem icon={<EmailIcon />} text="pritampramanik2004@gmail.com" link="pritampramanik2004@gmail.com"/> */}
        <ContactItem icon={<LinkedInIcon />} text="LinkedIn" link="https://www.linkedin.com/in/pritam-pramanik-video-editor/" />
<ContactItem icon={<EmailIcon />} text="pritampramanik2004@gmail.com" link="pritampramanik2004@gmail.com" />

      </div>
      <div className="flex flex-col gap-2.5 mt-5">
        <button
          className="py-3 w-full text-xs font-medium text-white rounded-lg bg-black bg-opacity-80"
          onClick={handleContactClick}  // Smooth scroll trigger
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

function ContactItem({ icon, text, link }) {
  // Determine if the link is an email or external link
  const isEmail = link.startsWith("mailto:") || link.includes("@");

  return (
    <div className="flex gap-1.5 items-center">
      {icon}
      <a
        className="text-xs text-black text-opacity-70"
        href={isEmail ? `mailto:${link}` : link}
        target={isEmail ? "_self" : "_blank"} 
        rel={isEmail ? "" : "noopener noreferrer"}
      >
        {text}
      </a>
    </div>
  );
}



function PhoneIcon() {
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
        d="M12.25 9.39C11.41 9.39 10.59 9.25 9.82 8.98C9.66 8.93 9.49 8.95 9.35 9.04L8.01 10.07C6.45 9.27 5.04 7.88 4.22 6.29L5.24 4.95C5.34 4.81 5.36 4.64 5.31 4.48C5.04 3.71 4.9 2.89 4.9 2.05C4.9 1.8 4.7 1.6 4.45 1.6H2.25C2 1.6 1.75 1.8 1.75 2.05C1.75 7.94 6.61 12.8 12.5 12.8C12.75 12.8 12.95 12.6 12.95 12.35V10.15C12.95 9.9 12.75 9.7 12.5 9.7C12.41 9.39 12.34 9.39 12.25 9.39Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
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
        d="M11.6667 2.33337H2.33333C1.59695 2.33337 1 2.93033 1 3.66671V10.3334C1 11.0698 1.59695 11.6667 2.33333 11.6667H11.6667C12.403 11.6667 13 11.0698 13 10.3334V3.66671C13 2.93033 12.403 2.33337 11.6667 2.33337Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 3.66663L7 7.66663L13 3.66663"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function WebsiteIcon() {
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
        d="M7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1ZM2 7C2 6.40666 2.10893 5.83974 2.30491 5.31555C2.48842 5.72449 2.74202 6.10241 3.20497 6.10241C3.86133 6.10241 4.1443 5.54945 4.44367 4.95818C4.74304 4.36691 5.04241 3.77563 5.69877 3.77563C6.35513 3.77563 6.6545 4.32859 6.95387 4.91986C7.25324 5.51114 7.55261 6.10241 8.20897 6.10241C8.86533 6.10241 9.1647 5.54945 9.46407 4.95818C9.76344 4.36691 10.0628 3.77563 10.7192 3.77563C11.1821 3.77563 11.4357 4.15355 11.6192 4.56249C11.8152 5.08668 11.9241 5.6536 11.9241 6.24694C11.9241 9.43451 9.73451 12 6.54694 12C3.35938 12 2 9.43451 2 7Z"
        fill="currentColor"
      />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[14px] h-[14px]"
    >
      <path
        d="M4.98 3.5C4.98 4.33 4.33 5 3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 4.98 2.67 4.98 3.5ZM4 8H2V20H4V8ZM8 8H6V20H8V14C8 12.9 8.9 12 10 12C11.1 12 12 12.9 12 14V20H14V13.5C14 11.57 12.43 10 10.5 10C8.57 10 8 11.57 8 13.5V20Z"
        fill="currentColor"
      />
    </svg>
  );
}


export default ContactInfo;