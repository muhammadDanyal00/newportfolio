"use client";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaJava,
  //   FaCogs,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiCsharp,
  SiMui,
  SiAntdesign,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

import { TbApi } from "react-icons/tb";

interface SkillIconProps {
  icon: JSX.Element; // Specify that icon is a JSX Element
  name: string; // Specify that name is a string
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon, name }) => {
  return (
    <div className="group flex flex-col items-center">
      <div className="text-white group-hover:animate-bounce transition-transform duration-300">
        {icon}
      </div>
      <p className="mt-2 text-lg text-white">{name}</p>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="bg-gray-900 py-14">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {/* First Row */}
          <SkillIcon icon={<FaReact size={40} />} name="React" />
          <SkillIcon icon={<FaNodeJs size={40} />} name="Node.js" />
          <SkillIcon icon={<SiTailwindcss size={40} />} name="Tailwind CSS" />
          <SkillIcon icon={<SiNextdotjs size={40} />} name="Next.js" />
          <SkillIcon icon={<FaDatabase size={40} />} name="PostgreSQL" />

          {/* Second Row */}
          <SkillIcon icon={<SiTypescript size={40} />} name="TypeScript" />
          <SkillIcon icon={<FaJava size={40} />} name="Java" />
          <SkillIcon icon={<SiCsharp size={40} />} name="C#" />
          <SkillIcon icon={<FaDocker size={40} />} name="Docker" />
          <SkillIcon icon={<SiMui size={40} />} name="MUI" />

          {/* Third Row */}
          <SkillIcon icon={<SiAntdesign size={40} />} name="Ant Design" />
          <SkillIcon icon={<FaBootstrap size={40} />} name="Bootstrap" />
          <SkillIcon icon={<TbApi size={40} />} name="API Handling" />
          <SkillIcon icon={<FaNodeJs size={40} />} name="Express.js" />
          <SkillIcon icon={<SiMongodb size={40} />} name="MongoDB" />
        </div>
      </div>
    </section>
  );
}

// function SkillIcon({ icon, name }) {
//   return (
//     <div className="group flex flex-col items-center">
//       <div className="text-white group-hover:animate-bounce transition-transform duration-300">
//         {icon}
//       </div>
//       <p className="mt-2 text-lg text-white">{name}</p>
//     </div>
//   );
// }
