import React from "react";
import SectionHeader from "../ui/SectionHeader";

function AboutSection() {
  return (
    <section className="mb-10">
      <SectionHeader title="About" />
      <p className="mb-5 text-sm leading-6 text-black text-opacity-70">
        I am Alex Morgan, a passionate Web Designer &amp; Developer residing in
        the dynamic city of Berlin, Germany. My expertise lies at the
        intersection of visual design and technical implementation.
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
