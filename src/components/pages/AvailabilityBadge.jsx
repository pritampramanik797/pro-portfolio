import React from "react";

function AvailabilityBadge() {
  return (
    <div className="flex gap-2 items-center p-1 mb-2.5 bg-white rounded-lg border border-neutral-800 border-opacity-10">
      <AvailabilityIcon />
      <span className="text-xs text-black text-opacity-70">
        Available for work
      </span>
    </div>
  );
}

function AvailabilityIcon() {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[22px] h-[22px]"
    >
      <mask
        id="mask0_1_516"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="22"
        height="23"
      >
        <path d="M22 0.419983H0V22.42H22V0.419983Z" fill="white"></path>
      </mask>
      <g mask="url(#mask0_1_516)">
        <g opacity="0.327038">
          <path
            d="M18.9379 11.42C18.9379 15.8009 15.3809 19.3579 11 19.3579C6.61909 19.3579 3.06212 15.8009 3.06212 11.42C3.06212 7.03908 6.61909 3.48212 11 3.48212C15.3809 3.48212 18.9379 7.03908 18.9379 11.42Z"
            fill="#4EB040"
          ></path>
        </g>
        <path
          d="M15.4619 11.42C15.4619 13.8825 13.4625 15.8818 11 15.8818C8.53752 15.8818 6.53816 13.8825 6.53816 11.42C6.53816 8.95748 8.53752 6.95813 11 6.95813C13.4625 6.95813 15.4619 8.95748 15.4619 11.42Z"
          fill="#4EB040"
        ></path>
      </g>
    </svg>
  );
}

export default AvailabilityBadge;
