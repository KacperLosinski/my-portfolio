"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faFigma,
  faGitAlt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

import nextJsIcon from "/public/icons/nextjs.svg";
import mongoDbIcon from "/public/icons/mongodb.svg";
import tailwindIcon from "/public/icons/tailwind.svg";
import typeScriptIcon from "/public/icons/typescript.svg";

const ToolKit = () => {
  const tools = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "TypeScript", icon: typeScriptIcon, isSvg: true },
    { name: "Node.js", icon: faNodeJs },
    { name: "Next.js", icon: nextJsIcon, isSvg: true },
    { name: "MongoDB", icon: mongoDbIcon, isSvg: true },
    { name: "Figma", icon: faFigma },
    { name: "Git", icon: faGitAlt },
    { name: "TailwindCSS", icon: tailwindIcon, isSvg: true },
    { name: "Bootstrap", icon: faBootstrap },
  ];

  return (
    <section
      className="pt-[calc(var(--nav-height)+20px)] min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-darkBlue to-lightBlue text-white px-8 md:px-16"
    >
      {/* Nagłówek sekcji */}
      <div className="space-y-6 mb-10 text-left w-full max-w-3xl">
        <h3 className="text-white text-xl sm:text-2xl font-semibold uppercase tracking-wide">
          <span className="text-primary">/</span> My Tool Kit
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-2">
          My extensive list of tool kit
        </h2>
      </div>

      {/* Lista narzędzi */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div
              className="relative md:w-24 md:h-24 w-20 h-20 bg-secondary rounded-md flex items-center justify-center shadow-lg cursor-pointer transition-all hover:bg-gradient-to-br from-secondary to-primary"
              data-tooltip={tool.name}
            >
              {tool.isSvg ? (
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 filter invert"
                />
              ) : (
                <FontAwesomeIcon icon={tool.icon} className="text-white text-4xl" />
              )}

              {/* Tooltip */}
              <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white text-zinc-800 text-xs px-2 py-1 rounded-md opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all">
                {tool.name}
                <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-3 h-[4px] bg-white [clip-path:polygon(50%_0,0_100%,100%_100%)]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolKit;
