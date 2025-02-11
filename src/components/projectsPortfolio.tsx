"use client";

import React from "react";

const projects = [
  {
    title: "O.Robotics",
    description: "A simple, responsive landing page built with Tailwind CSS, designed to showcase services with a modern and clean layout.",
    technologies: ["HTML5", "TailwindCSS", "React"],
    bgColor: "bg-project1",
  },
  {
    title: "Phone App",
    description: "A mobile app interface designed for smooth UX and high performance.",
    technologies: ["React Native", "Expo"],
    bgColor: "bg-project2",
  },
  {
    title: "Tablet UI",
    description: "A dashboard for managing and tracking tasks efficiently.",
    technologies: ["Next.js", "TypeScript"],
    bgColor: "bg-project3",
  },
  {
    title: "Laptop Dashboard",
    description: "An advanced analytics dashboard for data visualization.",
    technologies: ["Vue.js", "Chart.js"],
    bgColor: "bg-project4",
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
            className={`relative group ${index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-1"} lg:row-span-1 h-48 sm:h-56 md:h-72 ${project.bgColor} rounded-lg flex items-center justify-center text-xl font-semibold shadow-lg cursor-pointer transition-all hover:scale-105`}
          >
            {project.title}

            {/* Nakładka na hover */}
            <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <div className="flex gap-2 mt-3">
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
