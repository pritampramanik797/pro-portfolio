// import React from "react";
// import AboutSection from "../sections/AboutSection";
// import SkillsSection from "../sections/SkillsSection";
// import ExperienceSection from "../sections/ExperienceSection";
// import ProjectsSection from "../sections/ProjectsSection";
// import EducationSection from "../sections/EducationSection";
// import RecognitionSection from "../sections/RecognitionSection";
// import RecommendationsSection from "../sections/RecommendationsSection";
// import LinksSection from "../sections/LinksSection";
// import ContactSection from "../sections/ContactSection";

// function ProfileContent() {
//   return (
//     <article className="flex-1 ">
//       <AboutSection />
//       <SkillsSection />
//       {/* <ExperienceSection /> */}
//       <ProjectsSection />
//       {/* <EducationSection /> */}
//       {/* <RecognitionSection />
//       <RecommendationsSection /> */}
//       <LinksSection />
//       <ContactSection />
//     </article>
//   );
// }

// export default ProfileContent;  
import React, { useRef, useEffect } from "react";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import LinksSection from "../sections/LinksSection";
import ContactSection from "../sections/ContactSection";

function ProfileContent({ scrollToContact }) {
  useEffect(() => {
    if (scrollToContact) {
      scrollToContact.current = document.getElementById("contact-section");
    }
  }, [scrollToContact]);

  return (
    <article className="flex-1">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <LinksSection />

      {/* Contact Section with ID */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </article>
  );
}

export default ProfileContent;

