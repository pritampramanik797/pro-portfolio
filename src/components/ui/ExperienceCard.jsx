import React from "react";

function ExperienceCard({ company, role, period, image }) {
  return (
    <div className="p-3 bg-white rounded-lg shadow-sm">
      <div className="flex gap-3 items-center">
        <img
          src={image}
          alt={company}
          className="w-[56px] h-[56px] rounded-[8px]"
        />
        <div className="flex-1">
          <h3 className="text-base font-medium">{company}</h3>
          <p className="text-xs text-black text-opacity-70">{role}</p>
        </div>
        <time className="text-xs text-black text-opacity-60">{period}</time>
      </div>
    </div>
  );
}

export default ExperienceCard;
