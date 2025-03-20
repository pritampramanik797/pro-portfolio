// "use client";
// import React, { useState } from "react";
// import SectionHeader from "../ui/SectionHeader";

// function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//     // Reset form after submission
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section>
//       <SectionHeader title="Contact me" />
//       <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-2.5">
//           <label className="text-xs text-black text-opacity-70">
//             <span>Name</span>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="px-3 mt-2.5 w-full bg-white rounded-lg h-[50px]"
//               required
//             />
//           </label>
//           <label className="text-xs text-black text-opacity-70">
//             <span>Email</span>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="px-3 mt-2.5 w-full bg-white rounded-lg h-[50px]"
//               required
//             />
//           </label>
//         </div>
//         <label className="text-xs text-black text-opacity-70">
//           <span>Message</span>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="p-3 mt-2.5 w-full bg-white rounded-lg h-[100px]"
//             required
//           />
//         </label>
//         <button
//           type="submit"
//           className="w-full text-sm font-semibold text-white rounded-lg bg-black bg-opacity-90 h-[50px]"
//         >
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// }

// export default ContactSection;
// "use client";
// import React, { useState, forwardRef } from "react";
// import SectionHeader from "../ui/SectionHeader";

// const ContactSection = forwardRef((props, ref) => {
//   console.log(ref)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section ref={ref}>  {/* Ref applied here */}
//       <SectionHeader title="Contact me" />
//       <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-2.5">
//           <label className="text-xs text-black text-opacity-70">
//             <span>Name</span>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="px-3 mt-2.5 w-full bg-white rounded-lg h-[50px]"
//               required
//             />
//           </label>
//           <label className="text-xs text-black text-opacity-70">
//             <span>Email</span>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="px-3 mt-2.5 w-full bg-white rounded-lg h-[50px]"
//               required
//             />
//           </label>
//         </div>
//         <label className="text-xs text-black text-opacity-70">
//           <span>Message</span>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="p-3 mt-2.5 w-full bg-white rounded-lg h-[100px]"
//             required
//           />
//         </label>
//         <button
//           type="submit"
//           className="w-full text-sm font-semibold text-white rounded-lg bg-black bg-opacity-90 h-[50px]"
//         >
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// });

// export default ContactSection;



"use client";
import React, { useState, forwardRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import toast from "react-hot-toast";

const ContactSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://getform.io/f/ebpdxvpb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <section ref={ref}>
      <SectionHeader title="Contact me" />

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2.5">
          <label className="text-xs text-black text-opacity-70">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-3 mt-2.5 w-full bg-white rounded-lg h-[50px]"
              required
            />
          </label>
          <label className="text-xs text-black text-opacity-70">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-3 mt-2.5 w-full bg-white rounded-lg h-[50px]"
              required
            />
          </label>
        </div>

        <label className="text-xs text-black text-opacity-70">
          <span>Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 mt-2.5 w-full bg-white rounded-lg h-[100px]"
            required
          />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-sm font-semibold text-white rounded-lg h-[50px] transition ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-black bg-opacity-90"
          }`}
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </section>
  );
});

export default ContactSection;
