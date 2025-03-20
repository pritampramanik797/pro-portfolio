import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ExperienceCard from "../ui/ExperienceCard";

function EducationSection() {
  const education = [
    {
      institution: "Berlin State University",
      degree: "Undergraduate in UI/UX",
      period: "Aug 24 - Present",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c3746d8bbf5c066bef6bb41acaee4b0905872533",
    },
    {
      institution: "GreenFields High school",
      degree: "High school diploma",
      period: "Sep 22 - Aug 24",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d7759bb64ee91731f7d7d1f860bf6742f34ca3a5",
    },
  ];

  return (
    <section className="mb-10">
      <SectionHeader title="Education" />
      <div className="flex flex-col gap-5">
        {education.map((edu, index) => (
          <ExperienceCard
            key={index}
            company={edu.institution}
            role={edu.degree}
            period={edu.period}
            image={edu.image}
          />
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
