import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ExperienceCard from "../ui/ExperienceCard";

function ExperienceSection() {
  const experiences = [
    {
      company: "Layers",
      role: "Senior Web developer",
      period: "Aug 24 - Present",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f6329237043d809bcd180f26f328b99ff55cd095",
    },
    {
      company: "Catalog",
      role: "Framer Developer",
      period: "Sep 2023 - Aug 24",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7daac3d7fe98497dec91d51eb16fa6bd0f94300e",
    },
    {
      company: "Adorn Agency",
      role: "Web designer",
      period: "Aug 2023 - Sep 23",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/07d54d813cb24d9820c88439b3520c5be918d68e",
    },
  ];

  return (
    <section className="mb-10">
      <SectionHeader title="Experience" />
      <div className="flex flex-col gap-5">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            image={exp.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
