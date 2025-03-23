import React from "react";
import SectionHeader from "../ui/SectionHeader";
import SkillTag from "../ui/SkillTag";

function SkillsSection() {
  const skills = [
    "Talking-head Videos",
    "Business Case Study Videos",
    "Podcast",
    "Podcast Intro",
    "Ad Video",
  ];

  return (
    <section className="mb-10">
      <SectionHeader title="Skills" />
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
