"use client";

import React from "react";
import getConfig from "next/config";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/my-portfolio" : "";



const projects = [
  {
    title: "Cocktail-App",
    description: "App developed as my thesis project, with ingredient-based search, user login, custom recipes, favorites, comments, and ratings.",
    technologies: ["React", "Node.js", "JavaScript", "CSS", "Firebase", "MongoDB", "Render"  ],
    bgColor: "bg-project4",
    imageSrc: "/mockups/cocktail-app-mockup.png",
    repoLink: "https://github.com/KacperLosinski/cocktail-app/",
  },
  {
    title: "Weather App",
    description: "Weather app with dynamic backgrounds based on weather and time of day.",
    technologies: ["Next.js", "API", "CSS", "TypeScript"],
    bgColor: "bg-project2",
    imageSrc: "/mockups/weather-app-mockup.png",
    repoLink: "https://github.com/KacperLosinski/weather-app/",
  },
  {
    title: "Arthrohard",
    description: "One-page website for a recruitment task, focused on responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    bgColor: "bg-project3",
    imageSrc: "/mockups/arthrohard-mockup.png",
    liveLink: "https://kacperlosinski.github.io/Arthrohard/",
  },
  {
    title: "O.Robotics",
    description: "A simple, responsive landing page built with Bootstrap, designed to showcase services with a modern and clean layout.",
    technologies: ["HTML", "Bootstrap", "JavaScript"],
    bgColor: "bg-project1",
    imageSrc: "/mockups/o.robotics-mockup.png",
    liveLink: "https://kacperlosinski.github.io/o.robotics/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-[calc(var(--nav-height)+20px)] min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-darkBlue to-lightBlue text-white px-6 sm:px-8"
    >
      {/* Nagłówek */}
      <div className="text-left w-full max-w-5xl mb-10 space-y-6">
        <h3 className="text-white text-xl sm:text-2xl font-semibold uppercase tracking-wide">
          <span className="text-primary">/</span> My Projects
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-2">
          Here are some of my projects I have done.
        </h2>
      </div>

      {/* Układ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
          key={index}
          className={`relative group ${index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-1"} lg:row-span-1 h-48 sm:h-56 md:h-72 ${project.bgColor} rounded-xl flex items-center justify-center shadow-lg cursor-pointer transition-all hover:scale-105 overflow-hidden`}
        >
          <img
            src={`${basePath}${project.imageSrc}`}
            alt={`${project.title} mockup`}
            className={`max-h-[70%] max-w-[60%] object-contain transition-transform duration-300 group-hover:scale-105 pointer-events-none ${
            index === 0 || index === 3 ? "drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" : ""
            }`}
          />
            {/* Nakładka na hover */}
            <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center p-4 text-center">
            <div className="flex items-center justify-center gap-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            {(project.repoLink || project.liveLink) && (
              <a
                href={project.liveLink || project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors text-base"
                title={
                  project.liveLink
                    ? "Check the site"
                    : "View repository"
                }
              >
              <i className="fa-solid fa-arrow-up-right-from-square transition-transform hover:scale-110" />
              </a>
            )}
      </div>

              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <div
  className={`mt-3 flex flex-wrap justify-center gap-2 text-center ${
    project.technologies.length > 4 ? "lg:flex-nowrap" : ""
  }`}
>

  {project.technologies.map((tech, techIndex) => (
    <span key={techIndex} className="bg-white text-black text-xs px-3 py-1 rounded-md">
      {tech}
    </span>
  ))}
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
