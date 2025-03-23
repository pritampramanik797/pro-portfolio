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

function ProfileContent({ scrollToContact,scrollToProjects }) {
  useEffect(() => {
    if (scrollToContact) {
      scrollToContact.current = document.getElementById("contact-section");
    }
  }, [scrollToContact]);
  useEffect(() => {
    if (scrollToProjects) {
      scrollToProjects.current = document.getElementById("project-section");
    }
  }, [scrollToProjects]);

  return (
    <article className="flex-1">
      <AboutSection />
      <SkillsSection />
      <div id="project-section"><ProjectsSection /></div>
      
      <LinksSection />

      {/* Contact Section with ID */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </article>
  );
}

export default ProfileContent;

