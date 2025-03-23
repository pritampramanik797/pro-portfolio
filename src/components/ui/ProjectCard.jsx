// import React, { useEffect, useState } from "react";
// import { FaPlay, FaTimes } from "react-icons/fa";
// import reel1 from "../../video/reel/reel-1.mp4";
// import reel2 from "../../video/reel/reel-2.mp4";
// import reel3 from "../../video/reel/reel-3.mp4";
// import yt1 from "../../video/yt/yt-1.mp4";
// import img1 from "../../video/reel/thum-1.png"
// import img2 from "../../video/reel/thum-2.jpg"
// import img3 from "../../video/reel/thum-3.jpg"
// import img4 from "../../video/reel/thum-4.jpg"
// import img5 from "../../video/reel/thum-5.jpg"
// import img6 from "../../video/yt/yt-thum-1.png"

// // Global variable to track the currently playing video
// let currentVideoId = null;

// function ProjectCard({ id, title, description, image, video, link, type }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [videoSrc, setVideoSrc] = useState("");
//   const [thumpImg, setThumpImg] = useState("");

//   // Map video names to their actual sources
//   useEffect(() => {
//     if (video === "reel-1") setVideoSrc(reel1);
//     else if (video === "reel-2") setVideoSrc(reel2);
//     else if (video === "reel-3") setVideoSrc(reel3);
//     else if (video === "yt-1") setVideoSrc(yt1);
//   }, [video, image]);
//   useEffect(() => {
//     if (image === 'thum-1') setThumpImg(img1);
//     if (image === 'thum-2') setThumpImg(img2);
//     if (image === 'thum-3') setThumpImg(img3);
//     if (image === 'thum-4') setThumpImg(img4);
//     if (image === 'thum-5') setThumpImg(img5);
//     if (image === 'yt-thum-1') setThumpImg(img6);
//     console.log(image)
//   }, [image])

//   // Handle video play logic
//   const handlePlay = () => {
//     // Stop previous video if another is playing
//     if (currentVideoId && currentVideoId !== id) {
//       const prevVideoElement = document.getElementById(currentVideoId);
//       if (prevVideoElement) {
//         prevVideoElement.pause();
//         prevVideoElement.currentTime = 0; // Reset previous video
//       }
//     }

//     currentVideoId = id; // Set the new active video
//     setIsPlaying(true);
//   };


//   const mediaSize = {
//     youtube: "w-[230px] h-[129px] md:w-[260px] md:h-[146px] lg:w-[320px] lg:h-[180px]",   // 16:9 aspect ratio
//     reel: "w-[180px] h-[320px] md:w-[150px] md:h-[267px] lg:w-[180px] lg:h-[320px]",      // 9:16 aspect ratio
//     default: "w-[180px] h-[101px] md:w-[200px] md:h-[112px] lg:w-[240px] lg:h-[135px]",   // 16:9 aspect ratio
//   };


//   return (
//     <article className="bg-white mx-2 rounded-lg shadow-md overflow-hidden  h-auto flex flex-col justify-between transition-all ">
//       {/* Media Container */}
//       <div
//         className={`relative ${mediaSize[type] || mediaSize.default} bg-gray-100 flex items-center justify-center cursor-pointer`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={handlePlay}
//       >
//         {/* Video or Image Display */}
//         {isPlaying ? (
//           <div className="w-full h-full relative">
//             <video
//               id={id} // Unique ID for each video
//               src={videoSrc}
//               controls
//               autoPlay
//               className="w-full h-full object-contain"
//               onClick={(e) => e.stopPropagation()}
//             />

//             {/* Close Button */}
//             <button
//               className="absolute top-2 right-2 bg-black text-white rounded-full p-1"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsPlaying(false);
//               }}
//             >
//               <FaTimes />
//             </button>
//           </div>
//         ) : (
//           <>
//             <img
//               src={thumpImg}
//               alt={title}
//               className="w-full h-full object-contain"
//             />

//             {/* Play Icon on Hover */}
//             {isHovered && (
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity">
//                 <FaPlay className="text-white text-3xl" />
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Card Content */}
//       <div className="p-3 flex-1 flex flex-col justify-between">
//         <div>
//           <h3 className="mb-1 text-xs font-semibold">{title}</h3>
//           <p className="text-[11px] text-gray-600">{description}</p>
//         </div>

//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 mt-3 px-2 py-1 text-[11px] font-medium text-gray-700 border border-gray-400 rounded-md hover:bg-black hover:text-white transition"
//         >
//           View Project
//           <ExternalLinkIcon />
//         </a>

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
//       className="w-3 h-3"
//     >
//       <path
//         d="M11.0975 4.11011V9.79761C11.0975 9.91364 11.0514 10.0249 10.9694 10.107C10.8873 10.189 10.776 10.2351 10.66 10.2351C10.544 10.2351 10.4327 10.189 10.3506 10.107C10.2686 10.0249 10.2225 9.91364 10.2225 9.79761V5.16612L3.96953 11.4196C3.88744 11.5017 3.7761 11.5479 3.66 11.5479C3.54391 11.5479 3.43256 11.5017 3.35047 11.4196C3.26838 11.3375 3.22226 11.2262 3.22226 11.1101C3.22226 10.994 3.26838 10.8827 3.35047 10.8006L9.60399 4.54761H4.9725C4.85647 4.54761 4.74519 4.50151 4.66314 4.41947C4.5811 4.33742 4.535 4.22614 4.535 4.11011C4.535 3.99408 4.5811 3.8828 4.66314 3.80075C4.74519 3.7187 4.85647 3.67261 4.9725 3.67261H10.66C10.776 3.67261 10.8873 3.7187 10.9694 3.80075C11.0514 3.8828 11.0975 3.99408 11.0975 4.11011Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

// export default ProjectCard;



import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import reel1 from "../../video/reel/reel-1.mp4";
import reel2 from "../../video/reel/reel-2.mp4";
import reel3 from "../../video/reel/reel-3.mp4";
import reel4 from "../../video/reel/reel-4.mp4";
import reel5 from "../../video/reel/reel-5.mp4";
import yt1 from "../../video/yt/yt-1.mp4";
import yt2 from "../../video/yt/yt-2.mp4";
import img1 from "../../video/reel/thum-1.png";
import img2 from "../../video/reel/thum-2.jpg";
import img3 from "../../video/reel/thum-3.jpg";
import img4 from "../../video/reel/thum-4.jpg";
import img5 from "../../video/reel/thum-5.jpg";
import img6 from "../../video/yt/yt-thum-1.png";
import img7 from "../../video/yt/yt-thum-2.png";

function ProjectCard({ 
  id, title, description,extraDescription, image, video, link, type, 
  isVideoPlaying, setCurrentVideoPlaying 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [thumbImg, setThumbImg] = useState("");

  const videoRef = useRef(null);

  // Map video names to their actual sources
  useEffect(() => {
    const videoMap = {
      "reel-1": reel1,
      "reel-2": reel2,
      "reel-3": reel3,
      "reel-4": reel4,
      "reel-5": reel5,
      "yt-1": yt1,
      "yt-2": yt2,
    };
    setVideoSrc(videoMap[video] || "");
  }, [video]);

  // Map thumbnail images
  useEffect(() => {
    const thumbMap = {
      "thum-1": img1,
      "thum-2": img2,
      "thum-3": img3,
      "thum-4": img4,
      "thum-5": img5,
      "yt-thum-1": img6,
      "yt-thum-2": img7,
    };
    setThumbImg(thumbMap[image] || "");
  }, [image]);

  // Handle play logic: pause any other video and start this one
  const handlePlay = (e) => {
    e.stopPropagation();
    // If another video is playing, pause it
    if (isVideoPlaying && isVideoPlaying !== id) {
      // The parent state will ensure that other videos pause (via useEffect below)
    }
    setCurrentVideoPlaying(id); // Set this video as playing
    setIsPlaying(true);
    videoRef.current?.play();
  };

  // When parent's current playing video changes, pause this card if it's not the current one.
  useEffect(() => {
    if (isVideoPlaying !== id && isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setIsPlaying(false);
    }
  }, [isVideoPlaying, id, isPlaying]);

  // Handle closing the video
  const handleClose = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    // If this card was the one playing, reset parent's current video
    if (isVideoPlaying === id) {
      setCurrentVideoPlaying(null);
    }
    setIsPlaying(false);
  };

  const mediaSize = {
    youtube: "w-[230px] h-[129px] md:w-[260px] md:h-[146px] lg:w-[320px] lg:h-[180px]", // 16:9
    reel: "w-[180px] h-[320px] md:w-[150px] md:h-[267px] lg:w-[180px] lg:h-[320px]",    // 9:16
    default: "w-[180px] h-[101px] md:w-[200px] md:h-[112px] lg:w-[240px] lg:h-[135px]", // 16:9
  };

  return (
    <article className="bg-white mx-2 rounded-lg shadow-md overflow-hidden h-auto flex flex-col justify-between transition-all">
      {/* Media Container */}
      <div
        className={`relative ${mediaSize[type] || mediaSize.default} bg-gray-100 flex items-center justify-center cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePlay}
      >
        {isPlaying ? (
          <div className="w-full h-full relative">
            <video
              ref={videoRef}
              id={id}
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-black bg-opacity-80 text-white rounded-full p-1 "
              onClick={(e) => {
                e.stopPropagation();
                handleClose(e);
              }}
            >
              <FaTimes />
            </button>
          </div>
        ) : (
          <>
            <img
              src={thumbImg}
              alt={title}
              className="w-full h-full object-contain"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity">
                <FaPlay className="text-white text-3xl" />
              </div>
            )}
          </>
        )}
      </div>
      {/* Card Content */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="mb-1 text-xs font-semibold">{title}</h3>
          <p className="text-[11px] text-gray-600">{description}{extraDescription && (<p className="mt-2">{extraDescription}</p>)}</p>
        </div>
        {/* <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 px-2 py-1 text-[11px] font-medium text-gray-700 border border-gray-400 rounded-md hover:bg-black hover:bg-opacity-80 hover:text-white transition"
        >
          View Project
          <ExternalLinkIcon />
        </a> */}
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
        d="M11.0975 4.11011V9.79761C11.0975 9.91364 11.0514 10.0249 10.9694 10.107C10.8873 10.189 10.776 10.2351 10.66 10.2351C10.544 10.2351 10.4327 10.189 10.3506 10.107C10.2686 10.0249 10.2225 9.91364 10.2225 9.79761V5.16612L3.96953 11.4196C3.88744 11.5017 3.7761 11.5479 3.66 11.5479C3.54391 11.5479 3.43256 11.5017 3.35047 11.4196C3.26838 11.3375 3.22226 11.2262 3.22226 11.1101C3.22226 10.994 3.26838 10.8827 3.35047 10.8006L9.60399 4.54761H4.9725C4.85647 4.54761 4.74519 4.50151 4.66314 4.41947C4.5811 4.33742 4.535 4.22614 4.535 4.11011Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ProjectCard;


