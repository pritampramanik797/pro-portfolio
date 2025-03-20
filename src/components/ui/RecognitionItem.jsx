import React from "react";

function RecognitionItem({ title, organization, year }) {
  return (
    <div className="flex items-start">
      <div className="pl-2 border-2 border-lime-600">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-xs text-black text-opacity-70">{organization}</p>
      </div>
      <div className="flex-1 mx-5 mt-2.5 border-[dashedpx] border-neutral-800 border-opacity-30" />
      <time className="text-sm text-black text-opacity-80">{year}</time>
    </div>
  );
}

export default RecognitionItem;
