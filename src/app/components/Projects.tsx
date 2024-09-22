// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Projects() {
//   const projectData = [
//     {
//       link: "https://expensetrakker.vercel.app/",
//       title: "Expense Tracker",
//       description:
//         "Created for mySelf as I needed a website that just keep the records of my monthly Expenses. This app is created using ReactJs + MUI.",
//       image: "/assets/expense2.webp",
//     },
//     {
//       link: "/projects",
//       title: "Decentralized Exchange",
//       description:
//         "A Decentralized Exchange using a lot of technologies like Web2.0 + Web3.0.  Still Under Construction...",
//       image: "/assets/DEX.webp",
//     },
//     {
//       link: "https://github.com/muhammadDanyal00/NextJs-barAndQrCode-Generator",
//       title: "Barcode Generator",
//       description: "A website using NextJs to generate barCodes and qrCodes.",
//       image: "/assets/barcode.webp",
//     },
//     {
//       link: "https://github.com/muhammadDanyal00/Authentication_System",
//       title: "JWT Authentication System",
//       description: "A full secure system just for security yusing MERN Stack.",
//       image: "/assets/lock2.webp",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="py-20 bg-gray-800 bg-opacity-70 backdrop-blur-md"
//     >
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-12 text-center text-gray-300">
//           Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projectData.map((project, idx) => (
//             <a
//               key={idx}
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <motion.div
//                 className="bg-gray-700 rounded-lg shadow-lg overflow-hidden h-full"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//               >
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   width={500}
//                   height={300}
//                   className="object-cover w-full h-64"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-2xl font-semibold mb-2 text-white">
//                     {project.title}
//                   </h3>
//                   <p className="text-white">{project.description}</p>
//                 </div>
//               </motion.div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projectData = [
    {
      link: "https://expensetrakker.vercel.app/",
      title: "Expense Tracker",
      description:
        "Created for mySelf as I needed a website that just keep the records of my monthly Expenses. This app is created using ReactJs + MUI.",
      image: "/assets/expense2.webp",
    },
    {
      link: "/projects",
      title: "Decentralized Exchange",
      description:
        "A Decentralized Exchange using a lot of technologies like Web2.0 + Web3.0.  Still Under Construction...",
      image: "/assets/DEX.webp",
    },
    {
      link: "https://github.com/muhammadDanyal00/NextJs-barAndQrCode-Generator",
      title: "Barcode Generator",
      description: "A website using NextJs to generate barCodes and qrCodes.",
      image: "/assets/barcode.webp",
    },
    {
      link: "https://github.com/muhammadDanyal00/Authentication_System",
      title: "JWT Authentication System",
      description: "A full secure system just for security using MERN Stack.",
      image: "/assets/lock2.webp",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-800 bg-opacity-70 backdrop-blur-md"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-300">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="bg-gray-700 rounded-lg shadow-lg overflow-hidden h-full relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 group-hover:bg-gray-600 transition-colors duration-300">
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
