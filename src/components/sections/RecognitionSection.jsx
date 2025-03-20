import React from "react";
import SectionHeader from "../ui/SectionHeader";
import RecognitionItem from "../ui/RecognitionItem";

function RecognitionSection() {
  const recognitions = [
    {
      title: "Best Web Designer",
      organization: "Awwwards",
      year: "2023",
    },
    {
      title: "Best animations awards",
      organization: "Framer Awards",
      year: "2020",
    },
    {
      title: "Top visual designer of the year",
      organization: "Awwwards",
      year: "2020",
    },
  ];

  return (
    <section className="mb-10">
      <SectionHeader title="Recognition" />
      <div className="flex flex-col gap-5">
        {recognitions.map((recognition, index) => (
          <RecognitionItem
            key={index}
            title={recognition.title}
            organization={recognition.organization}
            year={recognition.year}
          />
        ))}
      </div>
    </section>
  );
}

export default RecognitionSection;
