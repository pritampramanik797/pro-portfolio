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
      With 1M+ views across my edits, I specialize in turning raw footage into impactful stories. My clients trust me for delivering consistent, on-brand, and professional edits that drive results.
      </p>
    </section>
  );
}

export default AboutSection;
