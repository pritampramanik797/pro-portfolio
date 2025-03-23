

import React, { useRef, useState, useEffect, forwardRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projects from "../../projects";

const  ProjectsSection = forwardRef((props, ref)=> {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [currentVideoPlaying, setCurrentVideoPlaying] = useState(null);


  // Scroll function
  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  // Auto-scroll into full view when clicking partially visible cards
  const handleCardClick = (index) => {
    const container = scrollRef.current;
    const card = container.children[index];

    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  // Handle scroll visibility
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 25);  // Ensure proper hiding at the left end
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);  // Ensure proper hiding at the right end
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();  // Initial check
    }
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative mb-10" ref={ref}>
      <SectionHeader title="Projects" />

      {/* Scrollable Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth p-5 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="transition-transform duration-300 flex"
              style={{ scrollSnapAlign: "start", marginRight: "0" }}
              onClick={() => handleCardClick(index)}
            >
              <ProjectCard {...project} id={project.id || `video-${index}`} // Ensure each has a unique id
                isVideoPlaying={currentVideoPlaying}
                setCurrentVideoPlaying={setCurrentVideoPlaying}/>
            </div>
          ))}
        </div>

         {/* Fade Overlays */}
         {
          showLeft && ( <div
            className="absolute top-0 left-0 h-full w-12 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0))",
            }}
          />)
         }
        {
          showRight && (<div
            className="absolute top-0 right-0 h-full w-12 pointer-events-none"
            style={{
              background: "linear-gradient(to left, rgba(255,255,255,0.5), rgba(255,255,255,0))",
            }}
          />
  )
        }
        
        {/* Hide scrollbar */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Scroll Icons */}
        {showLeft && (
          <button
            onClick={() => scroll(-400)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full shadow-md hover:bg-gray-500 transition"
            aria-label="Scroll Left"
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scroll(400)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full shadow-md hover:bg-gray-500 transition"
            aria-label="Scroll Right"
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
})

export default ProjectsSection;

