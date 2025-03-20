import React from "react";

function RecommendationCard({ name, role, date, text, image }) {
  return (
    <article className="overflow-hidden bg-white rounded-lg shadow-sm">
      <header className="flex gap-3 items-center p-3 border bg-neutral-50 border-neutral-800 border-opacity-10">
        <img
          src={image}
          alt={name}
          className="w-[52px] h-[52px] rounded-[8px]"
        />
        <div className="flex-1">
          <h3 className="text-base font-medium">{name}</h3>
          <p className="text-xs text-black text-opacity-70">{role}</p>
        </div>
        <time className="px-1.5 py-1 text-xs bg-white rounded-md border border-black border-opacity-10 text-black text-opacity-70">
          {date}
        </time>
      </header>
      <p className="p-3.5 text-sm text-black text-opacity-70">{text}</p>
    </article>
  );
}

export default RecommendationCard;
