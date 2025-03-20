import React from "react";
import SectionHeader from "../ui/SectionHeader";
import SkillTag from "../ui/SkillTag";

function SkillsSection() {
  const skills = [
    "Web Design",
    "UI/UX Design",
    "Front-end development",
    "Web Animations",
    "Copywriting",
    "Marketing",
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
