import React from "react";
import SectionHeader from "../ui/SectionHeader";
import RecommendationCard from "../ui/RecommendationCard";

function RecommendationsSection() {
  const recommendations = [
    {
      name: "Jonathan Carter",
      role: "TechStarter CTO",
      date: "February 2023",
      text: "Alex's ability to combine creativity with strategic thinking has transformed the way our team approaches challenges, He is good in his domain.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b91b9a360315000dfd664737a29456e0107fd05c",
    },
    {
      name: "Michael Johnson",
      role: "Head of Product, NexaCorp",
      date: "February 2023",
      text: "Alex's leadership and vision have set a new standard for excellence, making a lasting impact on every project they lead. Highly recommended to work with him.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2d6d763493898a5218851dba97dca3f3cadf7c80",
    },
    {
      name: "Samantha Lee",
      role: "COO, InnovateX",
      date: "February 2023",
      text: "Alex consistently brings a fresh perspective to every project, fostering a collaborative environment that elevates the entire team",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e1f38575617943cecedce8e454fbe19b282f674e",
    },
  ];

  return (
    <section className="mb-10">
      <SectionHeader title="Recommendations" />
      <div className="flex flex-col gap-5">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard
            key={index}
            name={recommendation.name}
            role={recommendation.role}
            date={recommendation.date}
            text={recommendation.text}
            image={recommendation.image}
          />
        ))}
      </div>
    </section>
  );
}

export default RecommendationsSection;
