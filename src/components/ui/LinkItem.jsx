import React from "react";

function LinkItem({ text, fullWidth = false }) {
  return (
    <a
      href="#"
      className={`flex justify-between items-center p-3.5 bg-white rounded-lg ${fullWidth ? "col-span-2 max-sm:col-span-1" : ""}`}
    >
      <span className="text-sm text-black text-opacity-80">{text}</span>
      <ExternalLinkIcon />
    </a>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[18px] h-[18px]"
    >
      <path
        d="M14.0625 4.77002V12.0825C14.0625 12.2317 14.0032 12.3748 13.8978 12.4803C13.7923 12.5858 13.6492 12.645 13.5 12.645C13.3508 12.645 13.2077 12.5858 13.1023 12.4803C12.9968 12.3748 12.9375 12.2317 12.9375 12.0825V6.12775L4.89798 14.168C4.79243 14.2735 4.64927 14.3328 4.50001 14.3328C4.35074 14.3328 4.20759 14.2735 4.10204 14.168C3.99649 14.0624 3.93719 13.9193 3.93719 13.77C3.93719 13.6208 3.99649 13.4776 4.10204 13.3721L12.1423 5.33252H6.18751C6.03832 5.33252 5.89525 5.27326 5.78976 5.16777C5.68427 5.06228 5.62501 4.9192 5.62501 4.77002C5.62501 4.62084 5.68427 4.47776 5.78976 4.37227C5.89525 4.26678 6.03832 4.20752 6.18751 4.20752H13.5C13.6492 4.20752 13.7923 4.26678 13.8978 4.37227C14.0032 4.47776 14.0625 4.62084 14.0625 4.77002Z"
        fill="black"
      />
    </svg>
  );
}

export default LinkItem;
