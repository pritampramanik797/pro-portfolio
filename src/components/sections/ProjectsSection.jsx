// import React, { useRef } from "react";
// import SectionHeader from "../ui/SectionHeader";
// import ProjectCard from "../ui/ProjectCard";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function ProjectsSection() {
//   const projects = [
//     {
//       title: "Slate",
//       description: "A sleek and responsive landing page designed for modern startups.",
//       image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64aee2b00da6ef759ea496645f907a4b206cdea5",
//     },
//     {
//       title: "Antimetal",
//       description: "A dynamic, animation-focused landing page with creative transitions.",
//       image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bd65dcf85ec310fb43febddd7bd3a20c9b79a2d",
//     },
//     {
//       title: "Fusion",
//       description: "A futuristic dashboard interface with real-time data visualization.",
//       image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bd65dcf85ec310fb43febddd7bd3a20c9b79a2d",
//     },
//     {
//       title: "NexGen",
//       description: "A cutting-edge e-commerce platform with seamless user experience.",
//       image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd65dcf85ec310fb43febddd7bd3a20c9b79a2d",
//     },
//   ];

//   const scrollRef = useRef(null);

//   const scroll = (scrollOffset) => {
//     scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
//   };

//   return (
//     <section className="relative mb-10">
//       <SectionHeader title="Projects" />

//       {/* Scrollable container */}
//       <div className="relative">
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto scroll-smooth space-x-5 p-5"
//           style={{
//             scrollSnapType: "x mandatory",
//             scrollbarWidth: "none",     // Hide scrollbar for Firefox
//             msOverflowStyle: "none"      // Hide scrollbar for IE & Edge
//           }}
//         >
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="min-w-[100%] md:min-w-[48%] lg:min-w-[48%] transition-transform duration-300 hover:scale-105"
//               style={{ scrollSnapAlign: "start" }}
//             >
//               <ProjectCard
//                 title={project.title}
//                 description={project.description}
//                 image={project.image}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Hide scrollbar for Chrome, Safari, and Opera */}
//         <style>{`
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>

//         {/* Scroll Icons */}
//         <button
//           onClick={() => scroll(-300)}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
//           aria-label="Scroll Left"
//         >
//           <FaChevronLeft size={20} />
//         </button>

//         <button
//           onClick={() => scroll(300)}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
//           aria-label="Scroll Right"
//         >
//           <FaChevronRight size={20} />
//         </button>
//       </div>
//     </section>
//   );
// }

// export default ProjectsSection;


import React, { useRef, useState, useEffect } from "react";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projects from "../../projects";

function ProjectsSection() {
  

  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // Function to scroll the container
  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  // Function to check the scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative mb-10">
      <SectionHeader title="Projects" />

      {/* Scrollable container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth space-x-5 p-5 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",     // Hide scrollbar for Firefox
            msOverflowStyle: "none",    // Hide scrollbar for IE & Edge
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[100%] md:min-w-[48%] lg:min-w-[48%] flex  transition-transform duration-300 hover:scale-105"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProjectCard
                {...project}
              />
            </div>
          ))}
        </div>

        {/* Hide scrollbar for Chrome, Safari, and Opera */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Scroll Icons */}
        {showLeft && (
          <button
            onClick={() => scroll(-300)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full shadow-md hover:bg-gray-500 transition"
            aria-label="Scroll Left"
            style={{ opacity: 0.6, transition: 'opacity 0.3s' }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.6'}
          >
            <FaChevronLeft size={16} /> {/* Reduced icon size */}
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scroll(300)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full shadow-md hover:bg-gray-500 transition"
            aria-label="Scroll Right"
            style={{ opacity: 0.6, transition: 'opacity 0.3s' }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.6'}
          >
            <FaChevronRight size={16} /> {/* Reduced icon size */}
          </button>
        )}



      </div>
    </section>
  );
}

export default ProjectsSection;
