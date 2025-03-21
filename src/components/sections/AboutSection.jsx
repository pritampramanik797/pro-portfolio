import React from "react";
import SectionHeader from "../ui/SectionHeader";

function AboutSection() {
  return (
    <section className="mb-10">
      <SectionHeader title="About" />
      <p className="mb-5 text-sm leading-6 text-black text-opacity-70">
      Hey, I’m Pritam—a video editor with 3+ years of experience, helping content creators and businesses stand out with high-quality, engaging videos.
      </p>
      <p className="text-sm leading-6 text-black text-opacity-70">
        With over 5 years of experience in creating visually stunning and
        user-centric websites, I've honed my skills in both front-end and
        back-end development.
      </p>
    </section>
  );
}

export default AboutSection;
