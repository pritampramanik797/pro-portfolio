import React from "react";
import SectionHeader from "../ui/SectionHeader";
import LinkItem from "../ui/LinkItem";

function LinksSection() {
  const links = [
    { text: "Book a call" },
    { text: "Dribble" },
    { text: "Twitter" },
    { text: "Instagram" },
    { text: "Linkdlen", fullWidth: true },
  ];

  return (
    <section className="mb-10">
      <SectionHeader title="Links" />
      <div className="grid grid-cols-2 gap-2.5 max-sm:grid-cols-1">
        {links.map((link, index) => (
          <LinkItem key={index} text={link.text} fullWidth={link.fullWidth} />
        ))}
      </div>
    </section>
  );
}

export default LinksSection;
