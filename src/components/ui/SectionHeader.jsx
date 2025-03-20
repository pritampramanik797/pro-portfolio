import React from "react";

function SectionHeader({ title }) {
  return (
    <header className="px-2 py-1 mb-5 text-sm font-medium tracking-wide uppercase rounded-lg border border-black border-opacity-10 text-black text-opacity-90">
      {title}
    </header>
  );
}

export default SectionHeader;
