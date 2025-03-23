import React from "react";
import SectionHeader from "../ui/SectionHeader";
import LinkItem from "../ui/LinkItem";

function LinksSection() {
  const links = [
    // { text: "Book a call" },
    // { text: "Dribble" },
    { text: "Twitter" ,link:"https://x.com/pritam1797" },
    { text: "Instagram",link:"https://www.instagram.com/pritamcreates/" },
    { text: "LinkedIn",link:"https://www.linkedin.com/in/pritam-pramanik-video-editor" },
  ];

  return (
    <section className="mb-10">
      <SectionHeader title="Links" />
      {/* //grid grid-cols-2 gap-2.5 max-sm:grid-cols-1 */}
      <div className="flex gap-2 "> 
        {links.map((link, index) => (
          <LinkItem key={index} text={link.text} fullWidth={link.fullWidth} link={link.link} />
        ))}
      </div>
    </section>
  );
}

export default LinksSection;
