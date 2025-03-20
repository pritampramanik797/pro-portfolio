// import React from "react";

// function ProjectCard({ title, description, image }) {
//   return (
//     <article className="overflow-hidden bg-white rounded-lg shadow-sm min-h-80">
//       <img src={image} alt={title} className="w-full h-[146px] object-cover" />
//       <div className="p-3">
//         <h3 className="mb-2.5 text-base font-medium">{title}</h3>
//         <p className="mb-5 text-xs text-black text-opacity-60">{description}</p>
//         <button className="flex gap-2 items-center px-2 py-1.5 text-xs rounded-md border border-black border-opacity-10 text-black text-opacity-60">
//           <span>Click to view</span>
//           <ExternalLinkIcon />
//         </button>
//       </div>
//     </article>
//   );
// }

// function ExternalLinkIcon() {
//   return (
//     <svg
//       width="15"
//       height="15"
//       viewBox="0 0 15 15"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-[14px] h-[14px]"
//     >
//       <path
//         d="M11.0975 4.11011V9.79761C11.0975 9.91364 11.0514 10.0249 10.9694 10.107C10.8873 10.189 10.776 10.2351 10.66 10.2351C10.544 10.2351 10.4327 10.189 10.3506 10.107C10.2686 10.0249 10.2225 9.91364 10.2225 9.79761V5.16612L3.96953 11.4196C3.88744 11.5017 3.7761 11.5479 3.66 11.5479C3.54391 11.5479 3.43256 11.5017 3.35047 11.4196C3.26838 11.3375 3.22226 11.2262 3.22226 11.1101C3.22226 10.994 3.26838 10.8827 3.35047 10.8006L9.60399 4.54761H4.9725C4.85647 4.54761 4.74519 4.50151 4.66314 4.41947C4.5811 4.33742 4.535 4.22614 4.535 4.11011C4.535 3.99408 4.5811 3.8828 4.66314 3.80075C4.74519 3.7187 4.85647 3.67261 4.9725 3.67261H10.66C10.776 3.67261 10.8873 3.7187 10.9694 3.80075C11.0514 3.8828 11.0975 3.99408 11.0975 4.11011Z"
//         fill="black"
//       />
//     </svg>
//   );
// }

// export default ProjectCard;
import React, { useState } from "react";

function ProjectCard({ title, description, image, video, link, type }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Set dynamic dimensions based on video type
  const mediaSize = {
    youtube: "w-full h-[150px] md:h-[180px] lg:h-[200px]",  // Wider for YouTube
    reel: "w-full h-[280px] md:h-[320px] lg:h-[350px]",     // Taller for Reels
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden w-[260px] h-auto flex flex-col justify-between">
      
      {/* Media Container */}
      <div className={`relative ${mediaSize[type]} bg-gray-100 flex items-center justify-center`}>
        {video ? (
          <div className="w-full h-full overflow-hidden">
            {!isPlaying ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setIsPlaying(true)}
              />
            ) : (
              <video
                src={video}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="mb-2 text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-600">{description}</p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 text-xs font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
        >
          View Project
          <ExternalLinkIcon />
        </a>
      </div>
    </article>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-3"
    >
      <path
        d="M11.0975 4.11011V9.79761C11.0975 9.91364 11.0514 10.0249 10.9694 10.107C10.8873 10.189 10.776 10.2351 10.66 10.2351C10.544 10.2351 10.4327 10.189 10.3506 10.107C10.2686 10.0249 10.2225 9.91364 10.2225 9.79761V5.16612L3.96953 11.4196C3.88744 11.5017 3.7761 11.5479 3.66 11.5479C3.54391 11.5479 3.43256 11.5017 3.35047 11.4196C3.26838 11.3375 3.22226 11.2262 3.22226 11.1101C3.22226 10.994 3.26838 10.8827 3.35047 10.8006L9.60399 4.54761H4.9725C4.85647 4.54761 4.74519 4.50151 4.66314 4.41947C4.5811 4.33742 4.535 4.22614 4.535 4.11011C4.535 3.99408 4.5811 3.8828 4.66314 3.80075C4.74519 3.7187 4.85647 3.67261 4.9725 3.67261H10.66C10.776 3.67261 10.8873 3.7187 10.9694 3.80075C11.0514 3.8828 11.0975 3.99408 11.0975 4.11011Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ProjectCard;



